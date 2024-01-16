import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import CalendarPage from './src/pages/CalendarPage';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <CalendarPage/>
      </View>
    </PaperProvider>
  );
}

AppRegistry.registerComponent('FrontendCale', () => App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff343',
  },
});
