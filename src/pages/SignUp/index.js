import styled from "styled-components/native";
import { ActivityIndicator, Platform } from 'react-native'
import { 
    Background, 
    AreaInput, 
    Input, 
    SubmitButton, 
    SubmitText
  } from '../SignIn/styles';
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth'

export default function SignUp() {
    const { signUp, loading } = useContext(AuthContext)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignUp() {        
        signUp(nome, email, password)
    }

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
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Digite seu email'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Digite sua senha'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8} onPress={handleSignUp}>
                    {
                        loading ? (
                            <ActivityIndicator size={20} color='#fff' />
                        ) : (
                            <SubmitText>Cadastrar</SubmitText>
                        )
                    }
                </SubmitButton>

            </Container>
        </Background>
    )
}

const Titulo = styled.Text`
  font-size: 20px;
  color:rgb(97, 97, 97);
  margin-top: 100px;
  margin-bottom: 60px;
`

const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
`