import styled from "styled-components/native"

export const Header = styled.View`
    height: 55px;
    background-color: #1A1A1A;
    padding-left: 34px;
    padding-right: 34px;
    flex-direction: row;
    align-items: center;
    flex-direction: row;
`;

export const Back_Btn = styled.TouchableOpacity`
    height: 32px;
    width: 32px;
    border-radius: 10000px;
    border-width: 0.5px;
    border-color: #FFF;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
`;

export const Back_Ico = styled.Image`
    height: 10px;
    width: 10px;
`;

export const Text_Header = styled.Text`
    flex: 1;
    margin-left: 10px;
    font-family: RobotoCondensed-Regular;
    margin-top: auto;
    margin-bottom: auto
`;

export const Container = styled.ScrollView`
    flex: 1;
    background: #F5F5F5DB;
    padding-top: 42px;
    padding-left: 34px;
    padding-right: 34px
`;

export const Form_T = styled.Text`
    color: #1A1A1A; 
    font-family: RobotoCondensed-Light;
    font-size: 16px;
    margin-bottom: 20px;
`;

export const Info_T = styled.Text`
    color: #1A1A1A; 
    font-family: RobotoCondensed-Regular;
    font-size: 14px;
`;

export const Submit = styled.TouchableOpacity`
    height: 45px;
    width: 160px;
    border-radius: 21px;
    background-color: #1A1A1A;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 40px;
`;

export const T_Submit = styled.Text`
    font-family: RobotoCondensed-LightItalic;
    font-size: 18px;
    color: #FFFFFF
`;