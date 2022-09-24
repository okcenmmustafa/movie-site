import MovieList from "components/MovieList";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { selectorValue } from "redux/search/search";
import { useSelector } from "react-redux";

import { fetchPopular, searchMovie } from "utilities/request";
const Homepage = ({ movieList, search }) => {
  const searchQuery = useSelector(selectorValue);
  const [movies, setMovies] = useState(movieList.results);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  const loadMovies = async () => {
    const response = search
      ? await searchMovie(searchQuery, page)
      : await fetchPopular(page);
    const scrollMovies = response.data.results;

    setMovies(movies.concat(scrollMovies));
    setPage(page + 1);

    if (scrollMovies?.length < 19) {
      setHasMore(false);
    }
  };
  useEffect(async () => {
    setMovies(movieList.results);
    if (searchQuery) {
      (async () => {
        setMovies(await (await searchMovie(searchQuery)).data.results);
      })();
    }
  }, [search, searchQuery]);
  return (
    <div>
      <InfiniteScroll
        dataLength={movies.reduce((acc) => acc + movieList.total_results, 0)}
        next={loadMovies}
        hasMore={hasMore}
        scrollThreshold={0.9}
      >
        <MovieList movies={movies} />
      </InfiniteScroll>
    </div>
  );
};

export default Homepage;
