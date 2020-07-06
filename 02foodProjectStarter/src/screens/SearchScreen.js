import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResByPrice = (price) => {
    //price ==='$'|| '$$' ||'$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    // <View style={{flex: 1}}>
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{errorMessage}</Text>

      <ScrollView>
        <ResultsList
          results={filterResByPrice("$")}
          title="Cost Effective"
          // navigation={navigation}
        />
        <ResultsList
          results={filterResByPrice("$$")}
          title="Bit Pricier"
          // navigation={navigation}
        />
        <ResultsList
          results={filterResByPrice("$$$")}
          title="Bit Spender"
          // navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;