import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StrictMode } from 'react';
import store from './app/store';
import {  Provider  as StoreProvider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Budget } from './features/budget/budget';
import Home from './pages/home.js'
import Landing from './pages/landing.js'
import Welcome from './pages/welcome'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Landing"
          >
            <Stack.Screen
              name="Home"
              component={ Home }
              options={{ title: "Home"}}
              style={styles.container}
            />
            <Stack.Screen
              name="Landing"
              component={ Landing }
              options={{ title: "Landing"}}
              style={styles.container}
            />
            <Stack.Screen
              name="Welcome"
              component={ Welcome }
              options={{ title: "Welcome"}}
              style={styles.container}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
