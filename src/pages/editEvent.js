import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, ScrollView, FlatList } from 'react-native';
import { Provider as StoreProvider, useSelector } from 'react-redux';
import { Text } from '@rneui/themed';
import store from '../app/store';
import BottomNavBar from '../components/bottomNavBar';
import ExpenseRow from '../components/expenseRow';
import IncomeRow from '../components/incomeRow';
import _ from 'lodash';
import { getExpenseIdsByCategory } from '../features/expenses/expenseFilters';
import expenseCategories from '../constants/expenseCategories.json';
import CategoryTitles from '../constants/CategoryTitles.json'
import PrettyDropdownButton from '../components/prettyDropdownButton';

export default function EditEvent({ route, navigation }) {
    const [isExpense, setIsExpense] = useState(true);

    // lisää routen luku
    // bool type, true jos expense
    //const {type, category} = route.params;
    //setIsExpense(type);

    let activeBudgetId = store.getState('budgets')['budgets']['currentBudgetId'].budgetId;
    const budget = useSelector(state => state.budgets.byId[activeBudgetId]);

    const expenses = useSelector(state => state.expenses.byId);

    const expenseIds = getExpenseIdsByCategory(expenses, expenseCategories.ASUMINEN);

    const incomeIds = useSelector(state => state.incomes.allIds);

    // renders the container
    const renderContainer = () => {
        return(
            <>
                <Text style={styles.name}>{budget.budgetName}</Text>
                <Text style={styles.welcomeText}>{CategoryTitles.ASUMINEN}</Text>
                <FlatList style={styles.flatListContainer}
                    data={isExpense ? expenseIds : incomeIds}
                    renderItem={isExpense ? renderExpense : renderIncome}/>
                <View style={styles.dropdown}>
                    <PrettyDropdownButton 
                        onPress={() => console.log('Pressed dropdown')}
                        title="Lisää kulu"
                        disabledLeft
                        iconLeft=""
                        iconRight="chevron-down"
                    />
                </View>
            </>
        )
    }

    // renders expenseRows for each category
    // if lause varmistaa, että vain aktiivisen budjetin id:t luetaan
    const renderExpense = ({item}) => {
        if (budget.expenseIds.includes(item)) {
            return(
                <ExpenseRow expenseId={item} key={item}/>
            )
        }
    };

    // renders incomeRows for each category
    // if lause varmistaa, että vain aktiivisen budjetin id:t luetaan
    const renderIncome = ({item}) => {
        if (budget.expenseIds.includes(item)) {
            return(
                <IncomeRow incomeId={item} key={item}/>
            )
        }
    };

    return (
        <StoreProvider store={store}>
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>Eva - OmaBudjetti</Text>
                </View>

                <View style={styles.rectangle}>
                    
                    <FlatList 
                    data={[""]}
                    renderItem={renderContainer}/>

                </View>

            </View>

            <BottomNavBar navigation={navigation}/>

        </StoreProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#17B5AD',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        overflow: 'hidden',
        marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 25,
    },
    welcomeText: {
        marginLeft: 30,
        marginRight: 0,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 30,
    },
    name: {
        marginLeft: 30,
        marginTop: 5,
        fontSize: 12,
        fontFamily: 'Roboto',
        opacity: 0.5
    },
    divider: {
        marginTop: 4,
        marginLeft: 25,
        marginRight: 25,
        borderColor: 'black',
        borderBottomWidth: 1,
    },
    flatListContainer: {
        marginBottom: 30
    },
    flatList: {
        marginRight: 20
    },
    listText: {
        marginTop: 15,
        marginLeft: 30,
        marginRight: 10,
        color: '#000000',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 16,
    },
    dropdown: {
        width: 175
    },
    rectangle: {
        position: 'absolute',
        marginTop: 60,
        left: 0,
        right: 0,
        height: 600,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});
