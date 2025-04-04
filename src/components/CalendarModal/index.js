import { TouchableWithoutFeedback, View } from 'react-native';
import { Container, ButtonFilter, ButtonFilterText, ModalContent } from './styles';
import { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Mar.','Abr.','Mai.','Jun','Jul.','Ago','Set.','Out.','Nov.','Dez.'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
    dayNamesShort: ['DOM.','SEG.','TER.','QUA.','QUI.','SEX.','SAB.'],
    today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }) {
    const [dateNow, setDateNow] = useState(new Date())
    const [markedDates, setMarketDates] = useState({})

    function handleOnDayPress(date) {
        setDateNow(new Date(date.dateString))

        let markedDay = {}

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#fff'
        }

        setMarketDates(markedDay)
    }

    function handleFilterDate() {
        handleFilter(dateNow)
        setVisible()
    }

    return (
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex: 1 }}></View>
            </TouchableWithoutFeedback>

            <ModalContent>

                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#ff0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#fff'
                    }}
                />

                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>
                        Filtrar
                    </ButtonFilterText>
                </ButtonFilter>

            </ModalContent>
        </Container>
    );
}