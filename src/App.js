import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { StrictMode } from 'react';
import store from './app/store';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './pages/home.js'
import Landing from './pages/landing.js'
import Welcome from './pages/welcome'
import Living from './pages/living.js';
import Travel from './pages/travel.js';
import Loans from './pages/loans.js';
import Health from './pages/health.js';
import Insurance from './pages/insurance.js';
import OtherExpenses from './pages/otherexpenses.js';
import RandomExpenses from './pages/randomexpenses.js';
import Year from './pages/year';
import Break from './pages/break';
import Incomes from './pages/incomes';
import BottomNavBar from './components/bottomNavBar';
import EditMonth from './pages/editMonth';
import EditEvent from './pages/editEvent';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <StrictMode>
      <StoreProvider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Landing"
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  title: "Eva - OmaBudjetti",
                  headerStyle: {
                    backgroundColor: '#17B5AD',
                  },
                  headerTintColor: '#FFFFFF',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontFamily: 'Roboto',
                    fontWeight: 'bold',

                  },
                }}
                style={styles.container}
              />
              <Stack.Screen
                name="Landing"
                component={Landing}
                options={{ title: "Landing" }}
                style={styles.container}
              />
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ title: "Welcome" }}
                style={styles.container}
              />
              <Stack.Screen
                name="Living"
                component={Living}
                options={{ title: "Living" }}
                style={styles.container}
              />
              <Stack.Screen
                name="Travel"
                component={Travel}
                options={{ title: "Travel" }}
                style={styles.container}
              />
              <Stack.Screen
                name="Loans"
                component={Loans}
                options={{ title: "Loans" }}
                style={styles.container}
              />
              <Stack.Screen
                name="Health"
                component={Health}
                options={{ title: "Health" }}
                style={styles.container}
              />
              <Stack.Screen
                name="Insurance"
                component={Insurance}
                options={{ title: "Insurance" }}
                style={styles.container}
              />
              <Stack.Screen
                name="OtherExpenses"
                component={OtherExpenses}
                options={{ title: "OtherExpenses" }}
                style={styles.container}
              />
              <Stack.Screen
                name="RandomExpenses"
                component={RandomExpenses}
                options={{ title: "RandomExpenses" }}
                style={styles.container}
              />
              <Stack.Screen
                name="Break"
                component={Break}
                options={{ title: "Break" }}
                style={styles.container}
              />
              <Stack.Screen
                name="Incomes"
                component={Incomes}
                options={{ title: "Incomes" }}
                style={styles.container}
              />
              <Stack.Screen
                name="Year"
                component={Year}
                options={{ title: "Year" }}
                style={styles.container}
              />
              <Stack.Screen
                name="EditEvent"
                component={EditEvent}
                options={{ title: "EditEvent" }}
                style={styles.container}
              />
              <Stack.Screen
                name="EditMonth"
                component={EditMonth}
                options={{ title: "EditMonth" }}
                style={styles.container}
              />
              <Stack.Screen
                name="BottomNavBar"
                component={BottomNavBar}
              />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </NavigationContainer>
        </PaperProvider>
      </StoreProvider>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
  },
});
