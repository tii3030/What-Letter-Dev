import React, { useState } from "react";
import { View, ImageBackground, StyleSheet } from 'react-native';
// import images from "../../assets/images"; 
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProp } from '../routes/typesScreen';
import { Container } from './styles';

function ToTrain() {

    const navigation = useNavigation<HomeScreenProp>();

    function navTest() {
        navigation.navigate('Test');
    }

    return (
        <Container>
  
        </Container>
    );
}

export default ToTrain;