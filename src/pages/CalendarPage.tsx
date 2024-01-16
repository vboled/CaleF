import { StyleSheet, View } from "react-native";
import Calendar from "../components/Calendar";

export default function CalendarPage() {
    return (
        <View style={styles.container}>
            <Calendar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#ee6e33",
        marginTop:"10%",
        marginBottom:"100%",
        // marginRight:"2%"
    }
});