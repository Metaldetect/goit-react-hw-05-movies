import React, { useEffect, useState } from 'react';
import { FormContainer, Input } from './SearchFormStyles';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { searchMoviesByName } from 'Api/Api';

const SearchForm = ({ value, onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState([null]);

  const handleQueryChange = e => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  const debouncedSearch = debounce(onSearch, 300);

  useEffect(() => {
    const fetchMoviesByNameData = async () => {
      try {
        const response = await searchMoviesByName(query);
        setSearchQuery(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (query) {
      fetchMoviesByNameData();
    } else {
      setSearchQuery([]);
    }
  }, [query]);

  return (
    <FormContainer>
      <Input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={handleQueryChange}
      />
    </FormContainer>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
