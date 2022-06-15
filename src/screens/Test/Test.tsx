import React, { useState, useRef, useEffect } from "react";
import { DrawerLayoutAndroid, View, Modal } from 'react-native';
import { Info_T, Loading, Header, Text_Header, Conf_Btn, Conf_Ico, Drawer, Container, Form_T, Mini_Block, T_Block, Mini_BlockI, Con_Block, Hashtag, Submit, T_Submit, Clear, Clear_Ico, CheckAll, Check_Ico, Result, T_Result, Noise, Container_Modals, Modals } from './styles';
import images from "../../assets/images";
import { Neural } from '../../neuralNetwork/neuralNetwork'
import { LineChart } from "react-native-chart-kit";
import SplashScreen from  "react-native-splash-screen";

function Test() {

  const [isTrained, setIsTrained] = useState(true)

  useEffect(() => {
    SplashScreen.hide();
    let Train = new Neural()
    let resp = Train.Training()
    setDataBar(resp)

    setTimeout(() => {
      setIsTrained(false)
    }, 4500)
    
  }, []);

  const [isDrawer, setDrawer] = useState(false);
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const [dataBar, setDataBar] = useState({cycle: 0, errors: [0]})

  var data = {
    labels: ["", `Ciclos: ${dataBar.cycle}`],
    datasets: [{
      data: dataBar.errors
    }]
  }

  var chartConfig = {
    backgroundColor: "#7D0021",
    backgroundGradientFrom: "#1A1A1A",
    backgroundGradientTo: "#1A1A1A",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "1",
        strokeWidth: "0",
    }
  }

  const navigationView = () => (
    <Drawer>
      <Form_T>CARACTERÍSTICAS DA REDE NEURAL</Form_T>
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Info_T>Número de neurônios de entrada:</Info_T>
            <Info_T>63</Info_T>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Info_T>Utiliza-se o Bias</Info_T>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Info_T>Erro mínimo:</Info_T>
            <Info_T>0.01</Info_T>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Info_T>Entradas para o treinamento (3 fontes):</Info_T>
            <Info_T>21</Info_T>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Info_T>Algoritmo:</Info_T>
            <Info_T>Adaline (Regra Delta)</Info_T>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
            <Info_T>Taxa de aprendizagem:</Info_T>
            <Info_T>0.01</Info_T>
        </View>

        <Form_T style={{marginBottom: 0}}>EVOLUÇÃO DO TREINAMENTO</Form_T>
        <Form_T style={{marginBottom: 0, fontSize: 12}}>ERRO QUADRÁTICO X CICLO</Form_T>

        <View>

            <LineChart
                data={data}
                width={300 - 40} // from react-native
                height={340}
                // yAxisLabel="$"
                // yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={chartConfig}
                withDots={true}
                withShadow={true}
                withInnerLines={false}
                withOuterLines={false}
                withVerticalLines={false}
                withHorizontalLines={true}
                withVerticalLabels={true}
                withHorizontalLabels={true}

                style={{
                    paddingTop: 35,
                    borderRadius: 10
                }}
            />
        </View>
    </Drawer>
  );

  function changeDrawer() {
      isDrawer ? drawer?.current?.closeDrawer() : drawer?.current?.openDrawer()
      setDrawer(!isDrawer)
  }

  const initMatriz = [
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
  ]

  const allMatriz = [
    1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,
  ]

  const [matriz, setMatriz] = useState([
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,
  ]);

  function changeHash(index: number){

    let tmp_state = [ ...matriz];
    tmp_state[index] = tmp_state[index] == -1 ? 1 : -1;
    setMatriz( tmp_state );
  }

  function uncheckAll() {
    setMatriz(initMatriz);
  }

  function checkAll() {
    setMatriz(allMatriz);
  }

  const [letter, setLetter] = useState("?")
  function setTest() {
    let Train = new Neural()
    let resp = Train.Run(matriz)
    setLetter(resp)
  }

  return (

    <>

    <Header>
      <Text_Header>TESTE A IA</Text_Header>

      <Conf_Btn onPress={() => changeDrawer()}>
        <Conf_Ico source={images.configurations} />
      </Conf_Btn>
    </Header>

    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"right"}
      renderNavigationView={navigationView}
    >

      <Container>

        <Form_T>FORME UM CARACTER</Form_T>

        <View style={{marginBottom: 40}}>
          <Con_Block>
            <Mini_Block/>
            <Mini_Block><T_Block>1</T_Block></Mini_Block>
            <Mini_Block><T_Block>2</T_Block></Mini_Block>
            <Mini_Block><T_Block>3</T_Block></Mini_Block>
            <Mini_Block><T_Block>4</T_Block></Mini_Block>
            <Mini_Block><T_Block>5</T_Block></Mini_Block>
            <Mini_Block><T_Block>6</T_Block></Mini_Block>
            <Mini_Block><T_Block>7</T_Block></Mini_Block>
          </Con_Block>
          
          <Con_Block>
            <Mini_Block><T_Block>1</T_Block></Mini_Block>
            <Mini_BlockI delayPressIn={0} onPress={()=> changeHash(0)}><Hashtag selected={matriz[0]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(1)}><Hashtag selected={matriz[1]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(2)}><Hashtag selected={matriz[2]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(3)}><Hashtag selected={matriz[3]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(4)}><Hashtag selected={matriz[4]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(5)}><Hashtag selected={matriz[5]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(6)}><Hashtag selected={matriz[6]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>2</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(7)}><Hashtag selected={matriz[7]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(8)}><Hashtag selected={matriz[8]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(9)}><Hashtag selected={matriz[9]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(10)}><Hashtag selected={matriz[10]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(11)}><Hashtag selected={matriz[11]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(12)}><Hashtag selected={matriz[12]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(13)}><Hashtag selected={matriz[13]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>3</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(14)}><Hashtag selected={matriz[14]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(15)}><Hashtag selected={matriz[15]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(16)}><Hashtag selected={matriz[16]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(17)}><Hashtag selected={matriz[17]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(18)}><Hashtag selected={matriz[18]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(19)}><Hashtag selected={matriz[19]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(20)}><Hashtag selected={matriz[20]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>4</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(21)}><Hashtag selected={matriz[21]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(22)}><Hashtag selected={matriz[22]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(23)}><Hashtag selected={matriz[23]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(24)}><Hashtag selected={matriz[24]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(25)}><Hashtag selected={matriz[25]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(26)}><Hashtag selected={matriz[26]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(27)}><Hashtag selected={matriz[27]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>5</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(28)}><Hashtag selected={matriz[28]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(29)}><Hashtag selected={matriz[29]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(30)}><Hashtag selected={matriz[30]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(31)}><Hashtag selected={matriz[31]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(32)}><Hashtag selected={matriz[32]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(33)}><Hashtag selected={matriz[33]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(34)}><Hashtag selected={matriz[34]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>6</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(35)}><Hashtag selected={matriz[35]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(36)}><Hashtag selected={matriz[36]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(37)}><Hashtag selected={matriz[37]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(38)}><Hashtag selected={matriz[38]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(39)}><Hashtag selected={matriz[39]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(40)}><Hashtag selected={matriz[40]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(41)}><Hashtag selected={matriz[41]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>7</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(42)}><Hashtag selected={matriz[42]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(43)}><Hashtag selected={matriz[43]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(44)}><Hashtag selected={matriz[44]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(45)}><Hashtag selected={matriz[45]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(46)}><Hashtag selected={matriz[46]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(47)}><Hashtag selected={matriz[47]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(48)}><Hashtag selected={matriz[48]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>8</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(49)}><Hashtag selected={matriz[49]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(50)}><Hashtag selected={matriz[50]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(51)}><Hashtag selected={matriz[51]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(52)}><Hashtag selected={matriz[52]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(53)}><Hashtag selected={matriz[53]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(54)}><Hashtag selected={matriz[54]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(55)}><Hashtag selected={matriz[55]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>9</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(56)}><Hashtag selected={matriz[56]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(57)}><Hashtag selected={matriz[57]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(58)}><Hashtag selected={matriz[58]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(59)}><Hashtag selected={matriz[59]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(60)}><Hashtag selected={matriz[60]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(61)}><Hashtag selected={matriz[61]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(62)}><Hashtag selected={matriz[62]}>#</Hashtag></Mini_BlockI>
          </Con_Block>
        </View>

        <View style={{flexDirection: 'row'}}>

          <Submit onPress={()=> setTest()}>
            <T_Submit>TESTAR</T_Submit>
          </Submit>

          <Clear onPress={()=> uncheckAll()}>
            <Clear_Ico source={images.uncheckAll} />
          </Clear>

          <CheckAll onPress={()=> checkAll()}>
            <Check_Ico source={images.checkAll} />
          </CheckAll>

        </View>

        <Noise>CARACTER (RUÍDO 0,0 %)</Noise>
        <Result>
          <T_Result>{letter}</T_Result>
        </Result>

      </Container>
    </DrawerLayoutAndroid>
    

    <Modal
      animationType="fade"
      transparent={true}
      visible={isTrained}
      onRequestClose={() => {
        setIsTrained(!isTrained);
      }}
    >
      <Container_Modals>
        <Modals>
          <Form_T style={{fontWeight: 'bold'}}>Treinando a IA...</Form_T>
          <Loading source={images.loading}></Loading>
        </Modals>
      </Container_Modals>
    </Modal>

    </>

  );
}

export default Test;