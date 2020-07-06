import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    console.log('Hi there!');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'seattle'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };
  // call searchApi when component is firsted rendered, BAD CODE!
  useEffect(() => {
    searchApi("noodle");
  }, []);

  return [searchApi, results, errorMessage];
};
