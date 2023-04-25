import { View, StyleSheet, Modal, FlatList  } from 'react-native';
import { useState } from 'react';
import { Text, Icon } from '@rneui/themed';
import PrettyNavigationButton from './prettyNavigationButton';
import PrettyNumberButton from './prettyNumberButton';
import months from '../constants/months';

const RecurrenceModal = ({ recurrence, handleMonthEdit, handleExit }) => {

    const data = [[<PrettyNumberButton title="1" selected={recurrence.includes(months.Jan)} onPress={handleMonthEdit}/>, 
                   <PrettyNumberButton title="2" selected={recurrence.includes(months.Feb)} onPress={handleMonthEdit}/>, 
                   <PrettyNumberButton title="3" selected={recurrence.includes(months.Mar)} onPress={handleMonthEdit}/>, 
                   <PrettyNumberButton title="4" selected={recurrence.includes(months.Apr)} onPress={handleMonthEdit}/>],
                  [<PrettyNumberButton title="5" selected={recurrence.includes(months.May)} onPress={handleMonthEdit}/>, 
                   <PrettyNumberButton title="6" selected={recurrence.includes(months.Jun)} onPress={handleMonthEdit}/>, 
                   <PrettyNumberButton title="7" selected={recurrence.includes(months.Jul)} onPress={handleMonthEdit}/>, 
                   <PrettyNumberButton title="8" selected={recurrence.includes(months.Aug)} onPress={handleMonthEdit}/>],
                  [<PrettyNumberButton title="9" selected={recurrence.includes(months.Sep)} onPress={handleMonthEdit}/>, 
                   <PrettyNumberButton title="10" selected={recurrence.includes(months.Oct)} onPress={handleMonthEdit}/>, 
                   <PrettyNumberButton title="11" selected={recurrence.includes(months.Noc)} onPress={handleMonthEdit}/>, 
                   <PrettyNumberButton title="12" selected={recurrence.includes(months.Dec)} onPress={handleMonthEdit}/>]]

    const renderRow = ({item, index}) => {
        return (
            <FlatList
            data={data[index]}
            renderItem={renderItem}
            horizontal={true}/>
        )
    }

    const renderItem = ({item}) => {
        return(
            item
        )
    }

    return(
        <Modal
        animationType='fade'
        transparent={true}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Valitse kuukaudet, joille summa jaetaan</Text>
                <FlatList 
                data={data}
                renderItem={renderRow}/>

                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <PrettyNavigationButton
                            title="Valmis"
                            disabledLeft
                            disabledRight
                            onPress={handleExit}/>
                </View>

            </View>
        </Modal>
    )
}

export default RecurrenceModal;

const styles = StyleSheet.create ({
    modalView: {
        marginTop: 255,
        marginBottom: 255,
        margin: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    modalText: {
        color: '#696969',
        fontFamily: 'Roboto',
        fontSize: 12,
        marginBottom: 5
    }
})