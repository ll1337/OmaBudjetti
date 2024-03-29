import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native';
import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity } from 'react-native';
import SuccessfulNotification from './successfulNotification';


const DecimalInput = ({ handleAmountChange, id }) => {
    const [valid, setValid] = useState(true);
    const [visible, setVisible] = useState(false)
    const [valueEdited, setValueEdited] = useState(false);

    const handleOnEndEditing = () => {
        //setVisible(!valid)
        if (valid) {
            setValueEdited(true)
            setTimeout(() => {setValueEdited(false)}, 600);
        }
    }

    const expenses = useSelector(state => state.expenses.allIds);
    var object = {};

    if (expenses.includes(id)) {
        object = useSelector(state => state.expenses.byId[id]);
    } else {
        object = useSelector(state => state.incomes.byId[id]);
    }

    const validateInput = (input) => {
        var re = new RegExp(/^\d{0,5}\.?\d{0,2}$/);
        return re.test(input);
    };

    const handleChangeText = (changedAmount) => {
        const inputIsValid = validateInput(changedAmount);
        //setValid(inputIsValid);
        if (inputIsValid) {
            if (changedAmount.length > 0) {
                handleAmountChange(parseFloat(changedAmount));
            } else {
                handleAmountChange(0);
            }
        }
    };

    const setValue = () => {
        if (object.amount.toString() == 0) {
            return "";
        } else {
            return object.amount.toString();
        }
    }

    return (
        <View style={styles.container}>

            <TextInput
                style={valid ? styles.input : styles.inputfalse}
                keyboardType="phone-pad"
                placeholder='000.00'
                value={setValue()}
                maxLength={7}
                onChangeText={changedAmount => handleChangeText(changedAmount)}
                onEndEditing={() => { handleOnEndEditing() }}
            />

            {valueEdited && <SuccessfulNotification edited={true} />}
        </View>
    );
};

export default DecimalInput;

//<Modal
//visible={visible}
//transparent={true}
//onRequestClose={() => { setVisible(false) }}
//>
//<TouchableOpacity
//    style={styles.modalContainer}
//    onPress={() => { setVisible(false) }}>
//    <TouchableWithoutFeedback
//        onPress={() => { setVisible(false) }}>
//        <View style={styles.modal}>
//            <Text style={styles.modalText}>Voit syöttää vain positiivisia numeroita</Text>
//        </View>
//    </TouchableWithoutFeedback>
//    <View style={styles.triangleContainer}>
//        <View style={styles.triangle} />
//        <View style={styles.triangle2} />
//    </View>
//</TouchableOpacity>
//</Modal>

const styles = StyleSheet.create({
    input: {
        textAlign: 'center',
        borderWidth: 1,
        width: 60,
        opacity: 0.5,
        marginLeft: 10,
        marginRight: 5,
        borderStyle: 'dashed',
    },
    inputfalse: {
        textAlign: 'center',
        borderWidth: 1.5,
        borderColor: '#FF7575',
        width: 60,
        marginLeft: 10,
        marginRight: 5,
        borderStyle: 'dashed',

    },
    modalContainer: {
        flex: 1
    },
    modal: {
        alignContent: 'flex-end',
        marginTop: 110,
        marginLeft: "35%",
        marginRight: "15%",
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#FF7575',
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
        textAlign: 'center'
    },
    triangleContainer: {
        alignItems: 'flex-end'
    },
    triangle: {
        marginRight: 110,
        width: 10,
        height: 10,
        marginTop: -0.75,

        borderLeftWidth: 15,
        borderLeftColor: "transparent",
        borderRightWidth: 15,
        borderRightColor: "transparent",
        borderBottomWidth: 15,
        borderBottomColor: "#FF7575",
        transform: [{ rotate: "180deg" }],

    },
    triangle2: {
        marginRight: 110.85,
        marginTop: -16,
        width: 10,
        height: 10,
        borderLeftWidth: 14,
        borderLeftColor: "transparent",
        borderRightWidth: 14,
        borderRightColor: "transparent",
        borderBottomWidth: 14,
        borderBottomColor: "#fff",
        transform: [{ rotate: "180deg" }],
    }

});
