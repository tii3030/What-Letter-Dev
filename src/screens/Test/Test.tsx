import React, { useState, useRef } from "react";
import { DrawerLayoutAndroid, View } from 'react-native';
import { Header, Back_Btn, Back_Ico, Text_Header, Conf_Btn, Conf_Ico, Drawer, Type_Btn, Title_Drawer, Char_Btn, Text_bottom, Container, Form_T, Mini_Block, T_Block, Mini_BlockI, Con_Block, Hashtag, Submit, T_Submit, Clear, Clear_Ico, CheckAll, Check_Ico, Result, T_Result, Noise } from './styles';
import images from "../../assets/images";
import { useNavigation } from '@react-navigation/native';
import { ToTrainScreenProp } from '../routes/typesScreen';
import { Perceptron } from '../../neuralNetwork/singlePerceptron'

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
    type1: false,
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
    A: false,
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
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
  ]

  const allMatriz = [
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
  ]

  const [matriz, setMatriz] = useState([
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
  ]);

  function changeHash(row: number, index: number){

    let tmp_state = [ ...matriz];
    let tmp_row = tmp_state[row];
    tmp_row[index] = tmp_row[index] == 0 ? 1 : 0;
    tmp_state[row] = tmp_row;
    setMatriz( tmp_state );
  }

  function uncheckAll() {
    setMatriz(initMatriz);
  }

  function checkAll() {
    setMatriz(allMatriz);
  }

  function setTest() {

    type trainingSets = [
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
      {inputs: Array<number>, outputs: number},
    ]

    var training: trainingSets = [
      {inputs: [0,0,0,0,0,0,0], outputs: 0},
      {inputs: [1,0,0,0,0,0,0], outputs: 0},
      {inputs: [1,1,0,0,0,0,0], outputs: 0},
      {inputs: [1,1,1,0,0,0,0], outputs: 0},
      {inputs: [0,0,0,0,0,0,1], outputs: 0},
      {inputs: [0,0,0,0,0,1,1], outputs: 0},
      {inputs: [0,0,0,0,1,1,1], outputs: 0},
      {inputs: [0,0,1,0,1,0,0], outputs: 0},
      {inputs: [0,1,1,0,1,1,0], outputs: 0},
      {inputs: [1,1,1,0,1,1,1], outputs: 0},
      {inputs: [1,1,0,0,1,1,0], outputs: 0},
      {inputs: [0,1,1,0,0,1,1], outputs: 0},
      {inputs: [0,0,1,0,0,0,0], outputs: 1},
      {inputs: [0,0,0,0,1,0,0], outputs: 1},
      {inputs: [0,0,0,1,0,0,0], outputs: 1},
      {inputs: [0,0,1,1,0,0,0], outputs: 1},
      {inputs: [0,0,0,1,1,0,0], outputs: 1},
      {inputs: [0,0,1,1,1,0,0], outputs: 1},
    ]

    let runTest = new Perceptron()
    runTest.init(0.15, 1000)
    runTest.train(training)

    console.log(Math.trunc(runTest.run([1,1,1,1,0,0,0])))
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
            <Mini_BlockI onPress={()=> changeHash(0, 0)}><Hashtag selected={matriz[0][0]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(0, 1)}><Hashtag selected={matriz[0][1]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(0, 2)}><Hashtag selected={matriz[0][2]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(0, 3)}><Hashtag selected={matriz[0][3]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(0, 4)}><Hashtag selected={matriz[0][4]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(0, 5)}><Hashtag selected={matriz[0][5]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(0, 6)}><Hashtag selected={matriz[0][6]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>2</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(1, 0)}><Hashtag selected={matriz[1][0]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(1, 1)}><Hashtag selected={matriz[1][1]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(1, 2)}><Hashtag selected={matriz[1][2]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(1, 3)}><Hashtag selected={matriz[1][3]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(1, 4)}><Hashtag selected={matriz[1][4]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(1, 5)}><Hashtag selected={matriz[1][5]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(1, 6)}><Hashtag selected={matriz[1][6]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>3</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(2, 0)}><Hashtag selected={matriz[2][0]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(2, 1)}><Hashtag selected={matriz[2][1]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(2, 2)}><Hashtag selected={matriz[2][2]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(2, 3)}><Hashtag selected={matriz[2][3]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(2, 4)}><Hashtag selected={matriz[2][4]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(2, 5)}><Hashtag selected={matriz[2][5]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(2, 6)}><Hashtag selected={matriz[2][6]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>4</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(3, 0)}><Hashtag selected={matriz[3][0]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(3, 1)}><Hashtag selected={matriz[3][1]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(3, 2)}><Hashtag selected={matriz[3][2]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(3, 3)}><Hashtag selected={matriz[3][3]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(3, 4)}><Hashtag selected={matriz[3][4]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(3, 5)}><Hashtag selected={matriz[3][5]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(3, 6)}><Hashtag selected={matriz[3][6]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>5</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(4, 0)}><Hashtag selected={matriz[4][0]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(4, 1)}><Hashtag selected={matriz[4][1]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(4, 2)}><Hashtag selected={matriz[4][2]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(4, 3)}><Hashtag selected={matriz[4][3]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(4, 4)}><Hashtag selected={matriz[4][4]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(4, 5)}><Hashtag selected={matriz[4][5]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(4, 6)}><Hashtag selected={matriz[4][6]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>6</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(5, 0)}><Hashtag selected={matriz[5][0]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(5, 1)}><Hashtag selected={matriz[5][1]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(5, 2)}><Hashtag selected={matriz[5][2]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(5, 3)}><Hashtag selected={matriz[5][3]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(5, 4)}><Hashtag selected={matriz[5][4]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(5, 5)}><Hashtag selected={matriz[5][5]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(5, 6)}><Hashtag selected={matriz[5][6]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>7</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(6, 0)}><Hashtag selected={matriz[6][0]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(6, 1)}><Hashtag selected={matriz[6][1]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(6, 2)}><Hashtag selected={matriz[6][2]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(6, 3)}><Hashtag selected={matriz[6][3]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(6, 4)}><Hashtag selected={matriz[6][4]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(6, 5)}><Hashtag selected={matriz[6][5]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(6, 6)}><Hashtag selected={matriz[6][6]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>8</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(7, 0)}><Hashtag selected={matriz[7][0]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(7, 1)}><Hashtag selected={matriz[7][1]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(7, 2)}><Hashtag selected={matriz[7][2]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(7, 3)}><Hashtag selected={matriz[7][3]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(7, 4)}><Hashtag selected={matriz[7][4]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(7, 5)}><Hashtag selected={matriz[7][5]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(7, 6)}><Hashtag selected={matriz[7][6]}>#</Hashtag></Mini_BlockI>
          </Con_Block>

          <Con_Block>
            <Mini_Block><T_Block>9</T_Block></Mini_Block>
            <Mini_BlockI onPress={()=> changeHash(8, 0)}><Hashtag selected={matriz[8][0]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(8, 1)}><Hashtag selected={matriz[8][1]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(8, 2)}><Hashtag selected={matriz[8][2]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(8, 3)}><Hashtag selected={matriz[8][3]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(8, 4)}><Hashtag selected={matriz[8][4]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(8, 5)}><Hashtag selected={matriz[8][5]}>#</Hashtag></Mini_BlockI>
            <Mini_BlockI onPress={()=> changeHash(8, 6)}><Hashtag selected={matriz[8][6]}>#</Hashtag></Mini_BlockI>
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