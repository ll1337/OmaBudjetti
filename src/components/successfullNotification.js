import { View, StyleSheet, Modal  } from 'react-native';
import { useState } from 'react';
import { Text, Icon } from '@rneui/themed';

const SuccessfullNotification = (props) => {

    const [visible, setVisible] = useState(true);
    var text = "";
    if (props.saved){
        text = "Tallennus onnistui!"
    }

    return(
        <Modal
        animationType='fade'
        transparent={true}
        visible={visible}
        onShow={() => {setTimeout(() => {setVisible(!visible) 
        }, 1000);}}>
            <View style={styles.modalView}>
                <Icon 
                name='check-circle-outline'
                type='material-community'
                size={40}
                color='#fff'
                />
                <Text style={styles.modalText}>{text}</Text>
            </View>
        </Modal>
    )
}

export default SuccessfullNotification;

const styles = StyleSheet.create ({
    modalView: {
        marginTop: 255,
        margin: 50,
        backgroundColor: '#17B5AD',
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
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 25,
    },
})