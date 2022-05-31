import React, { useState } from "react";
import { View, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TestScreenProp } from '../routes/typesScreen';
import {Header, Back_Btn, Back_Ico, Text_Header } from './styles';
import images from "../../assets/images";

function ToTrain() {

    const navigation = useNavigation<TestScreenProp>();

    function navTest() {
        navigation.navigate('Test');
    }

    return (
        <Header>
            <Back_Btn onPress={()=> navigation.navigate('Test')}>
                <Back_Ico source={images.back} />
            </Back_Btn>
    
            <Text_Header>TESTAR</Text_Header>
        </Header>
    );
}

export default ToTrain;