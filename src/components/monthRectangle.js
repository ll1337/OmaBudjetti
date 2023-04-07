import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Avatar } from "react-native-paper";

const MonthRectangle = (props) => {

    const [monthExpanded, setMonthExpanded] = useState(false);

    const openDropdownHandler = () => {
        setMonthExpanded(prevState => !prevState);
    };

    const icon = props.positive ? 'currency-usd' : 'alert-outline';

    return(
        <View style={styles.container}>
            <TouchableOpacity {...props} 
                style={props.positive ? styles.negative : styles.positive}
                onPress={openDropdownHandler}>

                <View style={styles.topContainer}>                
                    <View style={styles.leftContainer}>
                        <Avatar.Icon size={50} color='#000000' icon={icon} style={styles.buttonIcon}/>
                        <View>
                            <Text style={styles.monthText}>Tammikuu</Text>
                            <Text style={styles.grayText}>+24e</Text>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <View>
                            <Text style={styles.monthText}>2023</Text>
                            <Text style={styles.cumulativeText}>Kumul. +200,00</Text>
                        </View>
                        <Avatar.Icon size={50} color='#000000' icon='chevron-down' style={styles.buttonIcon}/>
                    </View>
                </View>
                {monthExpanded && (
                    <View style={styles.expandedContainer}>
                        <View style={styles.expandedTextContainer}>
                            <Text style={styles.incomeText}>Tulot:</Text>
                            <Text style={styles.incomeText}>Menot:</Text>
                        </View>
                        <View style={styles.expandedTextContainer}>
                            <Text style={styles.amountText}>50e</Text>
                            <Text style={styles.amountText}>20e</Text>
                        </View>

                    </View>
                )}
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
    },
    positive: {
        borderColor: '#17B5AD',
        backgroundColor: '#EFFFFE',
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
    },
    button: {
        alignItems: 'center', 
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    monthText: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'Bold',
    },
    grayText: {
        color: 'gray',
        fontSize: 20,
    },
    buttonIcon: {
        backgroundColor: 'rgba(255,255,255,0)',
        color: '#000000',
    },
    cumulativeText: {
        color: 'gray',
        fontSize: 15,
    },
    divider: {
        height: 1,
        backgroundColor: 'gray',
        marginVertical: 16,
    },
    expandedContainer: {
        marginLeft: 50,
        marginRight: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    incomeText: {
        fontSize: 20,
    },
    amountText: {
        fontSize: 20,
    },
    expandedTextContainer: {
        alignItems: 'center',
    },
});