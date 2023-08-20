import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import { searchMoviesByName } from 'Api/Api';
import {
  ProductListContainer,
  TrendingHeading,
  List,
  Item,
  StyledLink,
} from 'components/MoviesList/MoviesListStyles';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const movieName = searchParams.get('query') || '';

    const search = async query => {
      try {
        const movies = await searchMoviesByName(query);
        if (movies.length === 0) {
          setError('No movies found.');
          setMovies([]);
        } else {
          setError(null);
          setMovies(movies);
        }
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching movies.');
      }
    };

    search(movieName);
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <ProductListContainer>
      <TrendingHeading>Movies</TrendingHeading>
      <SearchForm onSubmit={handleSubmit} searchResult={movies} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </StyledLink>
          </Item>
        ))}
      </List>
    </ProductListContainer>
  );
};

export default Movies;
