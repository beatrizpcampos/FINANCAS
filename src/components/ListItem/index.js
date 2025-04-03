import { Alert, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import {
  Container,
  Tipo,
  TipoText,
  IconView,
  ValorText
} from './styles'

export default function ListItem({ data, deleteItem }) {

  function handleDelete() {
    Alert.alert(
      'Atencao',
      'Voce tem certeza que deseeja deletar esse registro ?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDelete}>
    <Container>

      <Tipo>
        <IconView tipo={data.type}>
          <Icon
            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
            size={20}
            color="#fff"
          />
          <TipoText>{data.type}</TipoText>
        </IconView>
      </Tipo>

      <ValorText>
        {data.value}
      </ValorText>

    </Container>
    </TouchableWithoutFeedback>
  )
}