import React, { useState, useRef } from "react";
import { DrawerLayoutAndroid, View } from 'react-native';
import { Header, Back_Btn, Back_Ico, Text_Header, Conf_Btn, Conf_Ico, Drawer, Type_Btn, Title_Drawer, Char_Btn, Text_bottom, Container, Form_T, Mini_Block, T_Block, Mini_BlockI, Con_Block, Hashtag, Submit, T_Submit, Clear, Clear_Ico, CheckAll, Check_Ico, Result, T_Result, Noise } from './styles';
import images from "../../assets/images";
import { useNavigation } from '@react-navigation/native';
import { ToTrainScreenProp } from '../routes/typesScreen';
import { Perceptron } from '../../neuralNetwork/singlePerceptron'
import { training } from '../../trainings/training'
import { Neural } from '../../neuralNetwork/neuralNetwork'

function Test() {

  const [isDrawer, setDrawer] = useState(false);
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const navigation = useNavigation<ToTrainScreenProp>();

  // -----
  const initType = {
    type1: false,
    type2: false,
    type3: false
  }

  const [typeBtn, setBtnType] = useState({
    type1: true,
    type2: false,
    type3: false
  });

  const [type, setType] = useState(0);


  // -----
  const initChar = {
    A: false,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
  }

  const [charBtn, setBtnChar] = useState({
    A: true,
    B: false,
    C: false,
    D: false,
    E: false,
    F: false,
    G: false,
  });

  const [char, setChar] = useState('');


  const navigationView = () => (
    <Drawer>

      <Title_Drawer>TIPO DA FONTE</Title_Drawer>

      <View style={{marginBottom: 20}}>
        <Type_Btn selected={typeBtn.type1} onPress={()=> {setBtnType({...initType, type1: !typeBtn.type1}), !typeBtn.type1 ? setType(1) : setType(0)}}>
          <Text_bottom selected={typeBtn.type1}>Tipo 1</Text_bottom>
        </Type_Btn>

        <Type_Btn selected={typeBtn.type2} onPress={()=> {setBtnType({...initType, type2: !typeBtn.type2}), !typeBtn.type2 ? setType(2) : setType(0)}}>
          <Text_bottom selected={typeBtn.type2}>Tipo 2</Text_bottom>
        </Type_Btn>

        <Type_Btn selected={typeBtn.type3} onPress={()=> {setBtnType({...initType, type3: !typeBtn.type3}), !typeBtn.type3 ? setType(3) : setType(0)}}>
          <Text_bottom selected={typeBtn.type3}>Tipo 3</Text_bottom>
        </Type_Btn>
      </View>

      <Title_Drawer>CARACTER</Title_Drawer>

      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Char_Btn selected={charBtn.A} onPress={()=> {setBtnChar({...initChar, A: !charBtn.A}), !charBtn.A ? setChar('A') : setChar('')}}>
          <Text_bottom selected={charBtn.A}>A</Text_bottom>
        </Char_Btn>

        <Char_Btn selected={charBtn.B} onPress={()=> {setBtnChar({...initChar, B: !charBtn.B}), !charBtn.B ? setChar('B') : setChar('')}}>
          <Text_bottom selected={charBtn.B}>B</Text_bottom>
        </Char_Btn>

        <Char_Btn selected={charBtn.C} onPress={()=> {setBtnChar({...initChar, C: !charBtn.C}), !charBtn.C ? setChar('C') : setChar('')}}>
          <Text_bottom selected={charBtn.C}>C</Text_bottom>
        </Char_Btn>

        <Char_Btn selected={charBtn.D} onPress={()=> {setBtnChar({...initChar, D: !charBtn.D}), !charBtn.D ? setChar('D') : setChar('')}}>
          <Text_bottom selected={charBtn.D}>D</Text_bottom>
        </Char_Btn>

        <Char_Btn selected={charBtn.E} onPress={()=> {setBtnChar({...initChar, E: !charBtn.E}), !charBtn.E ? setChar('E') : setChar('')}}>
          <Text_bottom selected={charBtn.E}>E</Text_bottom>
        </Char_Btn>

        <Char_Btn selected={charBtn.F} onPress={()=> {setBtnChar({...initChar, F: !charBtn.F}), !charBtn.F ? setChar('F') : setChar('')}}>
          <Text_bottom selected={charBtn.F}>F</Text_bottom>
        </Char_Btn>

        <Char_Btn selected={charBtn.G} onPress={()=> {setBtnChar({...initChar, G: !charBtn.G}), !charBtn.G ? setChar('G') : setChar('')}}>
          <Text_bottom selected={charBtn.G}>G</Text_bottom>
        </Char_Btn>
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

  function setTest() {
    // let runTest = new Perceptron()
    // console.log(Math.trunc(runTest.run([0,0,1,0,0,0,0])))

    let Train = new Neural()
    Train.Run(matriz)
  }

  return (

    <>

    <Header>
      <Back_Btn onPress={()=> navigation.navigate('ToTrain')}>
        <Back_Ico source={images.back} />
      </Back_Btn>

      <Text_Header>TREINAR</Text_Header>

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
            <Mini_BlockI onPress={()=> changeHash(0)}><Hashtag selected={matriz[0]}>#</Hashtag></Mini_BlockI>
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
          <T_Result>A</T_Result>
        </Result>

      </Container>
    </DrawerLayoutAndroid>
    
    </>

  );
}

export default Test;