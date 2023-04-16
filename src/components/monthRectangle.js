import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Avatar } from "react-native-paper";
import store from '../app/store';

const MonthRectangle = (props) => {

    const [monthExpanded, setMonthExpanded] = useState(false);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [totalIncomes, setTotalIncomes] = useState(0);
    const [cumulative, setCumulative] = useState(props.cumulative);
    
    var monthTotal = 0;

    const openDropdownHandler = () => {
        setMonthExpanded(prevState => !prevState);
    };

    // ota kuukaudesta kaikki menot & tulot
	    // props.uuid.incomes.date == props.yearMonth*
	    // 
	    // setTotalIncomes( (totalIncomes) => totalIncomes+income)
	    // setCumulative( (cumulative) => cumulative+income)
	    // setCumulative( (cumulative) => cumulative-expense)
	    // monthTotal = monthTotal+income
	    // monthTotal = monthTotal-expense
    
    // !props.pastTwo && {opacity: 0.5}
    

    const icon = monthTotal > 0 ? 'currency-usd' : 'alert-outline';

    return(
        <View style={styles.container}>
            <TouchableOpacity {...props} 
                style={[
                    cumulative < 0 ? styles.negative : styles.positive,
                    props.pastTwo && { opacity: 0.5 } 
                ]}
                onPress={openDropdownHandler}>

                <View style={styles.topContainer}>                
                    <View style={styles.leftContainer}>
                        <Avatar.Icon size={50} color='#000000' icon={icon} style={styles.buttonIcon}/>
                        <View>
                            <Text style={styles.monthText}>{props.yearMonth}</Text>
                            <Text style={styles.grayText}>{monthTotal}</Text>
                        </View>
                    </View>
                    <View style={styles.rightContainer}>
                        <View>
                            <Text style={styles.monthText}>props.yearMonth</Text>
                            <Text style={styles.cumulativeText}>Kumul. {cumulative}</Text>
                        </View>
                        <Avatar.Icon size={50} color='#000000' icon='chevron-down' style={styles.buttonIcon}/>
                    </View>
                </View>
                {monthExpanded && (
                    <View style={styles.expandedContainer}>
                        <View style={styles.expandedTextContainerLeft}>
                            <Text style={styles.incomeText}>Tulot:</Text>
                            <Text style={styles.incomeText}>Menot:</Text>
                        </View>
                        <View style={styles.expandedTextContainerRight}>
                            <Text style={styles.amountText}>{totalIncomes}</Text>
                            <Text style={styles.amountText}>{totalExpenses}</Text>
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
    pastTwoMonths: {
	opacity: 0.5,
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
    expandedTextContainerLeft: {
        alignItems: 'flex-start',
    },
    expandedTextContainerRight: {
        alignItems: 'center',
    },
});
