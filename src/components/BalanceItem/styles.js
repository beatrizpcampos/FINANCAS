import styled from "styled-components";

export const Container = styled.View`
    background-color: #${props => props.bg};
    margin-left: 14px;
    margin-right: 5px;
    border-radius: 15px;
    justify-content: center;
    align-items: flex-start;
    width: 250px;
    padding-left: 14px;
`

export const Label = styled.Text`
    color: #ffffff;
    font-size: 19px;
    font-weight: 500;
`

export const Balance = styled.Text`
    margin-top: 5px;
    font-size: 30px;
    color: #ffffff;
`