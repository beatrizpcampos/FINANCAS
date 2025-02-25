import { Platform } from 'react-native'
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

export default function SignIn() {
    const navigation = useNavigation()

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
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder='Digite sua senha'
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8}>
                    <SubmitText>Acessar conta</SubmitText>
                </SubmitButton>

                <Link onPress={ () => navigation.navigate('SignUp')}>
                    <LinkText>Crie uma conta !</LinkText>
                </Link>
            </Container>
        </Background>
    )
}