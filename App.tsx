import { StatusBar } from 'expo-status-bar';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import CalendarPage from './src/pages/CalendarPage';
import BottomButtons from './src/components/BottomButtons';

export default function App() {
  return (
    <View style={styles.container}>
      <CalendarPage/>
      <StatusBar style="auto" />
      <BottomButtons/>
    </View>
  );
}

AppRegistry.registerComponent('frontendcale', () => App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
