import React, { useState } from 'react';
import { FormContainer, Input } from './SearchFormStyles';
import PropTypes from 'prop-types';
import Button from 'components/Button';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={handleQueryChange}
      />
      <Button type="submit">Search</Button>
    </FormContainer>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
