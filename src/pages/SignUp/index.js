import { Platform } from 'react-native'
import {
    Background, 
    AreaInput, 
    Input,
    SubmitButton,
    SubmitText
} from '../SignIn/styles'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

export default function SignUp() {
    const navigation = useNavigation()

    return (
        <Background>
            <Container 
                behavior={Platform.OS === 'ios' ? 'paddiing' : ''}
                enabled
            >
                <Titulo>Crie uma nova conta</Titulo>
                <AreaInput>
                    <Input
                        placeholder='Digite seu nome'
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Digite seu email'
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Digite sua senha'
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

            </Container>
        </Background>
    )
}

const Titulo = styled.Text`
  font-size: 23;
  color:rgb(97, 97, 97);
  margin-top: 100px;
  margin-bottom: 60px;
`

const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
`