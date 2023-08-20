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
  const location = useLocation();

  useEffect(() => {
    const movieName = searchParams.get('query') || '';

    const search = async query => {
      try {
        const movies = await searchMoviesByName(query);
        if (movies.length === 0) {
          // setMovies([]);
        } else {
          setMovies(movies);
        }
      } catch (error) {
        console.error(error);
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
