import {StyleSheet} from 'react-native';
import { Button, Text } from 'react-native-paper';
export default function DayButton() {
    return(
        <Button style={styles.button}>33</Button>       
    )
}

const styles = StyleSheet.create({
    button: {
    //   fontFamily: 'Nunito-Bold',
    //   fontSize: 40,
    // width: 60,  
    // height: 70,   
    // borderRadius: 100,            
    backgroundColor: '#ee6e73',
    flex:1,
    // width: 2,
    // textAlign: 'center',
    }
});