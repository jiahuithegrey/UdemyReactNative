import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput 
            placeholder="Search"
            style={styles.inputStyle}
            value = {term}
            onChangeText = {onTermChange}
            autoCapitalize = "none"
            autoCorrect= {false}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        // alignItems: 'center' 不建议，是可点击范围减小了
    },
    inputStyle: {
        flex: 1, //use as wide as it can take up the whole row
        fontSize: 18,

    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;