import React from "react";
import { Text, StyleSheet, View, Image} from "react-native";

//Deconstron way for props
const ImageDetail = ({src, name, score}) => {
    return <View>
        <Image source={src}/>
    <Text>{name}</Text>
    <Text>Score: {score}</Text>
    </View>
}

const styles = StyleSheet.create({

})

export default ImageDetail;

// const ImageDetail = props => {
//     return <View>
//         <Image source={props.src}/>
//     <Text>{props.name}</Text>
//     <Text>Score: {props.score}</Text>
//     </View>
// }

// props: System to pass data from parents to children
// State: System to track a piece of data that will change over time.
       // If that data changes, our app will "rerender"