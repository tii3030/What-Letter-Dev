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