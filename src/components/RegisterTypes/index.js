import { View } from 'react-native';
import { RegisterContainer, RegisterLabel, RegisterTypeButton } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import { useState } from 'react';

export default function RegisterTypes({ type, sendTypeChanged }) {
    const [typeSelected, setTypeSelected] = useState(type)

    function changeType(name) {
        if(name === 'receita'){
            setTypeSelected('receita');
            sendTypeChanged('receita');
        }else{
            setTypeSelected('despesa');
            sendTypeChanged('despesa');
        }
    }

    return (
        <RegisterContainer>

            <RegisterTypeButton
                checked={ typeSelected === 'receita' ? true : false }
                onPress={ () => changeType('receita') }
            >
                <Icon name='arrow-up' size={25} color='#121212' />
                <RegisterLabel>
                    Entrada
                </RegisterLabel>
            </RegisterTypeButton>

            <RegisterTypeButton 
                checked={typeSelected === 'despesa' ? true : false}
                onPress={ () => changeType('despesa') }
            >
                <Icon name='arrow-down' size={25} color='#121212' />
                <RegisterLabel>
                    Saida
                </RegisterLabel>
            </RegisterTypeButton>

        </RegisterContainer>
    );
}