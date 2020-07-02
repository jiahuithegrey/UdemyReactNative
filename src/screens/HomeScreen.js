import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => { //destructureing, just the navigation property from the props object
  return (
    <View>
      <Text style={styles.text}>
        This is Home screen. My first React native App!!
      </Text>

      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go To Components Demo"
      />
      <Button 
        onPress={() => navigation.navigate("List")}
        title = "Go To List Demo"
      />
      <Button 
        onPress={() => navigation.navigate("Image")}
        title="Go To Image Screen"
      />
      <Button
      title="Go To Counter Demo" 
      onPress={() => navigation.navigate("Counter")}
      />
      <Button
      title="Go To Color Demo" 
      onPress={() => navigation.navigate("Color")}
      />
      <Button
      title="Go To Square Screen Demo" 
      onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

// Notes:
// Default styling for button are different for Android and IOS
// Button has default styling, TouchableOpacity doesn't
