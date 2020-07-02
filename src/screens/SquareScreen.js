import React, {useReducer} from "react"; //hook
import { StyleSheet, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => { // action: how to change the state object
        // state === {red:number, green:number, blue:number}
        //action === {colorToChange: 'red' || 'green' || 'blue', amount: 15||-15}

        switch (action.colorToChange) {
            case 'red':
                if (state.red + action.amount > 225 || state.red + action.amount<0) {
                    return state;
                }
                //never gonna change state value directly
                return {...state, red: state.red + action.amount};
                //return a new object, copy and paste all the current state into the new object and change the state.red
            case 'green':
                return {...state, green: state.green + action.amount};
            case 'blue':
                return {...state, blue: state.blue + action.amount};
            default:
                return state;
        }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0}); //dispatch: runMyReducer
    const {red, green, blue} = state; //destructuring

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })} //callback function
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })} //callback function
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })} //callback function
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;

//Generally, we create state variables in the MOST PARENT component that needs to read or change a state value
// outside {} for JS expression , inner{} object literal

//Reducer: function that manages changes to an object
