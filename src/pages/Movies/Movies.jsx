import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { searchMoviesByName } from 'Api/Api';
import SearchMovie from 'components/SearchForm/SearchForm';
import {
  ProductListContainer,
  TrendingHeading,
  StyledLink,
} from 'components/MoviesList/MoviesListStyles';
import LoadingSpinner from 'components/Loader/Loader';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const results = await searchMoviesByName(query);

        if (results.length === 0) {
          setMovies([]);
        } else {
          setMovies(results);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearchChange = async query => {
    setLoading(true);
    setSearchParams({ query });
  };

  return (
    <ProductListContainer>
      <TrendingHeading>Movies</TrendingHeading>
      <SearchMovie onSearch={handleSearchChange} />
      {loading ? (
        <LoadingSpinner />
      ) : movies.length === 0 ? (
        <p>No movies found for the search query.</p>
      ) : (
        movies.map(movie => (
          <StyledLink
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.title}
          </StyledLink>
        ))
      )}
    </ProductListContainer>
  );
};

export default MoviesList;
