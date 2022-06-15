import styled from "styled-components/native"
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    margin-bottom: auto;
    color: #FFF
`;

export const Conf_Btn = styled.TouchableOpacity`
    height: 32px;
    width: 32px;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
`;

export const Conf_Ico = styled.Image`
    height: 32px;
    width: 32px;
`;

export const Drawer = styled.View`
    background-color: #FFF;
    flex: 1;
    padding: 20px;
`;

export const Container = styled.ScrollView`
    flex: 1;
    background: #F5F5F5DB;
    padding-top: 42px;
    padding-left: 10px;
    padding-right: 10px
`;

export const Form_T = styled.Text`
    color: #595959; 
    font-family: RobotoCondensed-Light;
    font-size: 16px;
    margin-bottom: 20px;
`;

export const Mini_Block = styled.View`
    height: 40px;
    width: 40px;
    max-width: 40px;
    min-width: 40px;
    max-height: 40px;
    min-height: 40px;
    background-color: #1A1A1A;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    align-items: center;
    flex-grow: 1;
    margin: 1px;
    padding: 10px;
    flex-basis: 0;
`;

export const T_Block = styled.Text`
    color: #FFF; 
    font-family: RobotoCondensed-Bold;
    font-size: 16px;
`;

export const Mini_BlockI = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    max-width: 40px;
    min-width: 40px;
    max-height: 40px;
    min-height: 40px;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    border: 0.8px solid #D9D9D9;
    align-items: center;
    flex-grow: 1;
    margin: 1px;
    flex-basis: 0;
`;

export const Con_Block = styled.View`
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
`;

export const Hashtag = styled.Text<{ selected?: number }>`
    color: #191919; 
    font-family: RobotoCondensed-Bold;
    font-size: 28px;

    ${({ selected }) => selected == -1 && `
        display: none;
    `}
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
    margin-bottom: 40px;
`;

export const T_Submit = styled.Text`
    font-family: RobotoCondensed-LightItalic;
    font-size: 18px;
    color: #FFFFFF
`;

export const Clear = styled.TouchableOpacity`
    height: 45px;
    width: 45px;
    border-radius: 21px;
    background-color: #1A1A1A;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    flex-direction: row;
`;

export const Clear_Ico = styled.Image`
    height: 18px;
    width: 18px;
`;

export const CheckAll = styled.TouchableOpacity`
    height: 45px;
    width: 45px;
    border-radius: 21px;
    background-color: #1A1A1A;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    flex-direction: row;
`;

export const Check_Ico = styled.Image`
    height: 20px;
    width: 20px;
`;

export const Result = styled.View`
    height: 68px;
    width: 236px;
    background-color: #1A1A1A;
    border-radius: 6px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 90px;
    justify-content: center;
    align-items: center;
`;

export const T_Result = styled.Text`
    font-family: RobotoCondensed-Bold;
    font-size: 44px;
    color: #FFFFFF;
`;

export const Noise = styled.Text`
    font-size: 14px;
    color: #1A1A1A;
    text-align: center;
    margin-bottom: 1px
    font-family: RobotoCondensed-Light;
`;

export const Container_Modals = styled.View`
    width: ${windowWidth}px;
    flex: 1;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    background-color: 'rgba(0,0,0,0.5)';
`;

export const Modals = styled.View`
    width: 288px;
    height: 200px;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    background: #f7f7f7;
    padding: 16px;
    z-index: 100000;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

export const Loading = styled.Image`
    height: 100px;
    width: 100px;
`;

export const Info_T = styled.Text`
    color: #1A1A1A; 
    font-family: RobotoCondensed-Regular;
    font-size: 14px;
`;
