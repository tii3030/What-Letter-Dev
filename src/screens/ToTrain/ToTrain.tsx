import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TestScreenProp } from '../routes/typesScreen';
import {Header, Back_Btn, Back_Ico, Text_Header, Container, Form_T, Info_T, Submit, T_Submit } from './styles';
import images from "../../assets/images";
import { Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { Perceptron } from '../../neuralNetwork/singlePerceptron'
import { training } from '../../trainings/training'

function ToTrain() {

    const navigation = useNavigation<TestScreenProp>();

    var data = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
        datasets: [{
            data: [
                1,
                0.98,
                0.86,
                0.82,
                0.76,
                0.65,
                0.54,
                0.41,
                0.35,
                0.24,
                0.19,
                0.05,
                0
            ]
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
            r: "4",
            strokeWidth: "0",
        }
    }

    function setTrain() {
        let runTest = new Perceptron()
        runTest.init(0.15, 1000)
        runTest.train(training)
    }

    return (

        <>
        <Header>
            <Back_Btn onPress={()=> navigation.navigate('Test')}>
                <Back_Ico source={images.back} />
            </Back_Btn>
    
            <Text_Header>TESTAR</Text_Header>
        </Header>

        <Container>

            <Form_T>CARACTERÍSTICAS DA REDE NEURAL</Form_T>
        
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Info_T>Número de neuronios de entrada:</Info_T>
                <Info_T>63</Info_T>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Info_T>Utiliza-se o Bias</Info_T>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Info_T>Erro mínimo:</Info_T>
                <Info_T>0.001</Info_T>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Info_T>Entradas para o treinamento (3 fontes):</Info_T>
                <Info_T>21</Info_T>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Info_T>Algoritmo:</Info_T>
                <Info_T>Adaline (Regra Delta)</Info_T>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Info_T>Taxa de aprendizagem:</Info_T>
                <Info_T>0.01</Info_T>
            </View>

            <Submit onPress={()=> setTrain()}>
                <T_Submit>TREINAR</T_Submit>
            </Submit>

            <Form_T style={{marginBottom: 0}}>EVOLUÇÃO DO TREINAMENTO</Form_T>
            <Form_T style={{marginBottom: 0}}>ERRO QUADRÁTICO X CICLO</Form_T>

            <View style={{alignItems: 'center', marginBottom: 80}}>

                <LineChart
                    data={data}
                    width={Dimensions.get('window').width - 68} // from react-native
                    height={360}
                    // yAxisLabel="$"
                    // yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={chartConfig}
                    withDots={true}
                    withShadow={true}
                    withInnerLines={true}
                    withOuterLines={true}
                    withVerticalLines={true}
                    withHorizontalLines={true}
                    withVerticalLabels={true}
                    withHorizontalLabels={true}

                    bezier
                    style={{
                        paddingTop: 35,
                        marginVertical: 8,
                        borderRadius: 10
                    }}
                />
            </View>

        </Container>



        </>
    );
}

export default ToTrain;