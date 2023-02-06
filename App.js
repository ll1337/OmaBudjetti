import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StrictMode } from 'react-native';


export default function App() {
  return (
    <StrictMode>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
