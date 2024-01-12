import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import DayButton from './src/components/DayButton';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <DayButton/>
        <Text>121</Text>
      </View>
    </PaperProvider>
  );
}

AppRegistry.registerComponent('FrontendCale', () => App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
