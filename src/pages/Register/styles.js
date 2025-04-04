import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: rgb(242, 240, 240);
`;

export const TitleInput = styled.Text`
    color: rgb(65, 64, 64);
    font-size: 17px;
    font-weight: 500;
    align-self: self-start;
    margin: 15px 0 10px 25px;
`

export const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    background-color: #ffffff;
    font-size: 17px;
    padding: 0 8px;
    margin-bottom: 14px;
    border-radius: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    border-radius: 10px;
`;

export const SubmitText = styled.Text`
    color: #fff;
    font-size: 21px;
    font-weight: bold;
`;