import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #ffffff;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    padding: 17px;
`;

export const Tipo = styled.View`
    flex-direction: row;
`;

export const TipoText = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 2px;
`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${ props => props.tipo === 'despesa' ? '#FF6347' : '#3CB371'};
    padding-left: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 8px;
    border-radius: 10px;
    margin-bottom: 2px;
`;

export const ValorText = styled.Text`
    color:rgb(65, 64, 64);
    font-size: 22px;
`;
