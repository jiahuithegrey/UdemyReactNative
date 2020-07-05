import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
  
    const searchApi = async (seachTerm) => {
      //api requests are async option
      try {
        const response = await yelp.get("/search", {
          params: {
            limit: 50,
            term: searchTerm, //term: term
            location: "seattle",
          },
        });
        setResults(response.data.businesses);
      } catch (err) {
        setErrorMessage("Something went wrong");
      }
    };
    // call searchApi when component is firsted rendered, BAD CODE!
    useEffect(() => {
      searchApi("pasta");
    }, []);

    return [searchApi, results, errorMessage];
};