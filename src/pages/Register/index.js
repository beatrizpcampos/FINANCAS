import { Background, Input, SubmitButton, SubmitText, TitleInput } from './styles';
import Header from '../../components/Header';
import { TouchableWithoutFeedback, SafeAreaView, Keyboard, Alert, Text } from 'react-native';
import { useState } from 'react';
import RegisterTypes from '../../components/RegisterTypes';
import api from '../../services/api';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
    const navigation = useNavigation()
    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [type, setType] = useState('receita')

    function Submit() {
        Keyboard.dismiss()

        if (isNaN(parseFloat(valueInput)) || type === null) {
            alert('Preencha todos os campos corretamente')
            return
        }

        Alert.alert(
            'Confirma esse registro ?',
            `${type} no valor de: R$ ${parseFloat(valueInput)} reais`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => addRegister()
                }
            ]
        )
    }

    async function addRegister() {
        Keyboard.dismiss()

        await api.post('./receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        })

        setLabelInput('');
        setValueInput('');
        navigation.navigate('Home')
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header title='Cadastrar movimentação' />

                <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>
                    <TitleInput>
                        Qual o nome da movimentação ?
                    </TitleInput>
                    <Input
                        placeholder="Ex: Aluguel"
                        value={labelInput}
                        onChangeText={(text) => setLabelInput(text)}
                    />

                    <TitleInput>
                        E o valor ?
                    </TitleInput>
                    <Input
                        placeholder="Ex: 300,00"
                        keyboardType="numeric"
                        value={valueInput}
                        onChangeText={(text) => setValueInput(text)}
                    />

                    <TitleInput>
                        Qual o tipo da movimentação ?
                    </TitleInput>
                    <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)} />

                    <SubmitButton onPress={Submit}>
                        <SubmitText>Cadastrar</SubmitText>
                    </SubmitButton>

                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    );
}