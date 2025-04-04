import { Platform, ActivityIndicator } from 'react-native'
import {
    Background,
    Container,
    Logo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText
} from '../SignIn/styles'
import { useNavigation } from '@react-navigation/native'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/auth'

export default function SignIn() {
    const navigation = useNavigation()
    const { signIn, loading } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(){
        signIn(email, password)
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'paddiing' : ''}
                enabled
            >
                <Logo
                    source={require('../../assets/logo.png')} />

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

                <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
                    {
                        loading ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Ainda nao tem conta ? Criar agora</LinkText>
                </Link>
            </Container>
        </Background>
    )
}