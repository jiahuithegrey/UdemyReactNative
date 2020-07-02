import React from "react";
import { Text, StyleSheet, View} from "react-native";
import ImageDetail from "../components/imageDetail";

const ImageScreen = () => {
    return <View>
            <ImageDetail name="Beach" src={require('../../assets/beach.jpg')} score={5}/>
            <ImageDetail name="Forest" src={require('../../assets/forest.jpg')} score={6}/>
            <ImageDetail name="Mountain" src={require('../../assets/mountain.jpg')} score={7}/>
        </View>
}

const styles = StyleSheet.create({

})

export default ImageScreen;