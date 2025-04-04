import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: rgb(247, 246, 246);
    align-items: center;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: rgb(65, 64, 64);
    margin-top: 150px;
`

export const Name = styled.Text`
    font-size: 24px;
    margin-bottom: 24px;
    margin-top: 8px;
    font-weight: 500;
    padding: 0 14px;
    color: rgb(65, 64, 64);
`

export const NewLink = styled.TouchableOpacity`
    background-color: #4169E1;
    width: 80%;
    margin-top: 50px;
    height: 45px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
`

export const NewText = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: #fff;
`

export const LogoutButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 45px;
    border-radius: 10px;
    background-color: #FF6347;
`

export const LogoutText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
`