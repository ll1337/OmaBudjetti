import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StrictMode } from 'react';
import store from './app/store';
import { Provider } from 'react-redux';
import { Budget } from './features/budget/budget';

export default function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <View style={styles.container}>
          <Text>So I guess we have redux working now</Text>
          <Budget></Budget>
          <StatusBar style="auto" />
        </View>
      </Provider>
    </StrictMode>
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
