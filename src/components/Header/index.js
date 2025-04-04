import { useNavigation } from "@react-navigation/native";
import { Container, Title, ButtonMenu } from "./styles";
import Icon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from "react-native";

export default function Header({ title }) {
    const navigation = useNavigation()

    return (
        <Container>
            
            {title && (
                <Title>{title}</Title>
            )}
            
            <TouchableOpacity onPress={ () => navigation.openDrawer() }>
                <Icon name='menu' size={30} color='rgb(65, 64, 64)'/>
            </TouchableOpacity>

        </Container>
    )
}