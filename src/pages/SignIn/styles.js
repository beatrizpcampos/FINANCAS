import styled from "styled-components/native";

export const Background = styled.View`
   flex: 1;
   background-color: rgb(247, 246, 246);
`

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
`

export const Logo = styled.Image`
    margin-top: 200px;
    margin-bottom: 50px;
`

export const AreaInput = styled.View`
    flex-direction: row;
`

export const Input = styled.TextInput`
    background-color: #fff;
    width: 90%;
    font-size: 17px;
    padding: 14px;
    border-radius: 10px;
    color: #121212;
    margin-bottom: 15px;
`

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 10px;
    background-color: #4169E1;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #fff;
`

export const Link = styled.TouchableOpacity`
    margin-top: 20px;
    margin-bottom: 10px;
`

export const LinkText = styled.Text`
    color: rgb(65, 64, 64);
    font-size: 16px;
`
