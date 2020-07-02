import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = "Jiahui Wang"

  return ( //wrap 多行JSX，要用（）环绕
    <View>
      <Text style={styles.Line1Style}>This is the component screen</Text>
      <Text style={styles.Line2Style}>Hello {name}</Text>
    </View>
  ); 
};

const styles = StyleSheet.create({
  Line1Style: {
    fontSize: 50
  },
  Line2Style: {
    fontSize: 25
  }
});

export default ComponentsScreen;
