import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Background, ListBalance, Area, Title, List } from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import { format } from 'date-fns';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import { Modal, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import ListItem from '../../components/ListItem';
import CalendarModal from '../../components/CalendarModal';

export default function Home() {
    const isFocused = useIsFocused()
    const navigation = useNavigation()
    const { signOut, user } = useContext(AuthContext)
    const [listBalance, setListBalance] = useState([])
    const [moviments, setMoviments] = useState([])
    const [dateMovements, setDateMovements] = useState(new Date())
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        let isActive = true

        async function getMovements() {
            let date = new Date(dateMovements)
            let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
            let dateFormated = format(onlyDate, 'dd/MM/yyyy')

            const receives = await api.get('/receives', {
                params: {
                    date: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })

            if (isActive) {
                setMoviments(receives.data)
                setListBalance(balance.data)
            }
        }

        getMovements()

        return () => isActive = false
    }, [isFocused, dateMovements])

    async function deleteItem(id) {
        try {
            await api.delete('/receives/delete', {
                params: {
                    item_id: id
                }
            })

            setDateMovements(new Date())
        } catch (error) {
            console.log(error)
        }
    }

    function filterDateMovemenets(dateSelected) {
        setDateMovements(dateSelected)
    }

    return (
        <Background>
            <Header title='Movimentações' />

            <ListBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag}
                renderItem={({ item }) => (<BalanceItem data={item} />)}
            />

            <Area>
                <Title>
                    Últimas movimentações
                </Title>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Icon name='add' color='rgb(65, 64, 64)' size={27} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Icon name='event' color='rgb(65, 64, 64)' size={27} />
                    </TouchableOpacity>
                </View>
            </Area>

            <List
                data={moviments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ListItem data={item} deleteItem={deleteItem} />}
                showsVerticalScrrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />

            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <CalendarModal
                    setVisible={() => setModalVisible(false)}
                    handleFilter={filterDateMovemenets}
                />
            </Modal>

        </Background>
    );
}