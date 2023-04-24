import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Avatar } from "react-native-paper";
import store from '../app/store';
import { Icon } from "@rneui/themed";
import PrettyNavigationButton from './prettyNavigationButton';

const monthsInFinnish = [
    "Tammikuu",
    "Helmikuu",
    "Maaliskuu",
    "Huhtikuu",
    "Toukokuu",
    "Kesäkuu",
    "Heinäkuu",
    "Elokuu",
    "Syyskuu",
    "Lokakuu",
    "Marraskuu",
    "Joulukuu"
];

const MonthRectangle = ( { month, year, pastMonth, noCumulative, monthView, navigation } ) => {
    

    const [monthExpanded, setMonthExpanded] = useState(false);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [totalIncomes, setTotalIncomes] = useState(0);
    

    const openDropdownHandler = () => {
        setMonthExpanded(prevState => !prevState);
    };

    const monthTotal = 2; // placeholder

    const icon = monthTotal > 0 ? 'euro-sign' : 'exclamation-triangle';

    // Cumulative View has chevron to the right, monthly to down and no dropdown functionality
    const iconRight = noCumulative ? 'chevron-right' : 'chevron-down';

    return(
        <View style={[styles.container, pastMonth && {opacity: 0.5}]}>
            <TouchableOpacity 
                style={
                    monthTotal < 0 ? styles.negative : styles.positive
                }
                onPress={openDropdownHandler}>

                <View style={styles.topContainer}>                
                    <View style={styles.leftContainer}>
                        <Icon type='font-awesome-5' size={30} iconColor={'#000000'} name={icon} style={styles.buttonIcon}/>
                        <View>
                            <Text style={styles.monthText}>{monthsInFinnish[month-1]}</Text>
                            <Text style={styles.grayText}>{monthTotal}</Text>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <View>
                            <Text style={styles.monthText}>{year}</Text>
                            <Text style={styles.cumulativeText}>Kumul. </Text>
                        </View>
                        
                        <Icon type="material-community" iconColor={'#000000'} name='chevron-down' size={35} style={styles.buttonIcon}/>
                    </View>
                </View>
                {monthExpanded && (
                    <View style={styles.verticalContainer}>
                        <View style={styles.divider}/>
                        <View style={styles.expandedContainer}>
                            <View style={styles.expandedTextContainerLeft}>
                                <Text style={styles.incomeText}>Tulot:</Text>
                                <Text style={styles.incomeText}>Menot:</Text>
                            </View>
                            <View style={styles.expandedTextContainerRight}>
                                <Text style={styles.amountText}>{totalIncomes}</Text>
                                <Text style={styles.amountText}>{totalExpenses}</Text>
                            </View>
                            {monthView && <View style={styles.editButton}>
                            <PrettyNavigationButton title="Tulot" onPress={() => navigation.navigate('EditMonth', {type: false, monthStr: monthsInFinnish[month - 1], month: month, year: year})} />
                                <PrettyNavigationButton title="Kulut" onPress={() => navigation.navigate('EditMonth', {type: true, monthStr: monthsInFinnish[month - 1], month: month, year: year})} />
                            </View>}

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
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
        borderRadius: 8,
    },
    negative: {
        borderColor: '#FF7575',
        backgroundColor: '#FEEAE6',
        borderWidth: 1,
        borderRadius: 8,
        padding: 4,
    },
    positive: {
        borderColor: '#17B5AD',
        backgroundColor: '#EFFFFE',
        borderWidth: 1,
        borderRadius: 8,
        padding: 4,
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
        marginLeft: 15,
        marginRight: 15,
    },
    cumulativeText: {
        color: 'gray',
        fontSize: 15,
    },
    divider: {
        height: 1,
        backgroundColor: 'gray',
        marginVertical: 10,
    },
    verticalContainer: {
        flexDirection: 'column',
    },
    divider: {
        marginTop: 4,
        marginLeft: 25,
        marginRight: 25,
        borderColor: 'gray',
        borderBottomWidth: 1,
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
    expandedTextContainerLeft: {
        alignItems: 'flex-start',
    },
    expandedTextContainerRight: {
        alignItems: 'center',
    },
    editButton: {
        alignSelf: 'center',
    },
});
