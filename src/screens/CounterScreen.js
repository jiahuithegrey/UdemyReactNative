import React, {useState} from "react";
import { Text, StyleSheet, View, Button} from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0); //dont modify a state var directly
    return (
        <View>
            <Button title="Increase" onPress={() => {
                // counter++;
                setCounter(counter + 1);
            }}/>
            <Button title="Decrease" onPress={() => {
                //counter--;
                setCounter(counter - 1);
            }} />
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
export default CounterScreen;

// const colors = [red, green];
// const [color1, color2] = [red, green];