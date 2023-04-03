import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Dialog, Icon } from '@rneui/themed';

const MonthRectangle = (props) => {

    const icon = props.positive ? 'currency-usd' : 'alert-outline';

    return(
        <View style={styles.container}>
            <TouchableOpacity {...props} style={props.positive ? styles.negative : styles.positive}>
                <Icon 
                    name={icon}
                    type="material-community"
                    iconColor={'#000000'}
                    size={30}
                />
                <Text>20e :D</Text>
            </TouchableOpacity>
        </View>
    )

}

export default MonthRectangle;

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',         
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },
    negative: {
        borderColor: '#FF7575',
        backgroundColor: '#FEEAE6',
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        alignitems: 'center', 
        justifycontent: 'space-between',
        overflow: 'hidden',
        flexDirection: 'row',
    },
    positive: {
        borderColor: '#17B5AD',
        backgroundColor: '#EFFFFE',
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        alignitems: 'center', 
        justifycontent: 'space-between',
        overflow: 'hidden',
        flexDirection: 'row',
    },
    button: {
        alignitems: 'center', 
        justifycontent: 'space-between',
        overflow: 'hidden',
    }
});