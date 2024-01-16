import { StyleSheet, View } from "react-native";
import DayButton from "./DayButton";

export default function Calendar() {
    return (
        <View style={styles.container}>
            <Week/>
            <Week/>
            <Week/>
            <Week/>
            <Week/>
            <Week/>
            <DayButton/>
        </View>
    );
}

function Week() {
    return (
        <View style={styles.week}>
            <DayButton></DayButton>
            <DayButton></DayButton>
            <DayButton></DayButton>
            <DayButton></DayButton>
            <DayButton></DayButton>
            <DayButton></DayButton>
            <DayButton></DayButton>
            <DayButton></DayButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    week: {
        flexDirection: 'row'
    }
});   



