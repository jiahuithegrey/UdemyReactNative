import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20}, 
    { name: "Friend #2", age: 21},
    { name: "Friend #3", age: 22},
    { name: "Friend #4", age: 23},
    { name: "Friend #5", age: 24},
    { name: "Friend #6", age: 25}
  ];
  return (
    <FlatList
      //horizontal //等于horizontal={true}横着滚动 
      //showsHorizontalScrollIndicator={false} //hide horizontal scroll bar
      keyExtractor={(friend) => friend.name} //use this way to add a key to each element
      data={friends}
      renderItem={({ item }) => {
        //element's item property 
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30
    }
});

export default ListScreen;

// add keyExtractor is better than changing the object itself
// { name: "Friend #1", key: '1'}


