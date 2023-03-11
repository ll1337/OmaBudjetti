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
import DateTest from './pages/dateTest';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <StrictMode>
      <StoreProvider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
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
                name="DateTest"
                component={DateTest}
                options={{ title: "Datepicker Test Area" }}
                style={styles.container}
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
