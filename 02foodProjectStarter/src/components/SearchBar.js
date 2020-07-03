import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchBar = () => {
    return (
        <View styele={styles.background}>
            <Text>Search Bar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50
    }
});

export default SearchBar;