import React from "react";
import styles from "components/MovieList.module.scss";
import MovieCard from "./MovieCard";
import MovieNotFound from "features/app/MovieNotFound";

export default function MovieList({ movies }) {
  if (!movies.length) return <MovieNotFound />;
  return (
    <section className={styles.movieListContainer}>
      {movies?.map((movie, key) => {
        return <MovieCard key={key} movie={movie} />;
      })}
    </section>
  );
}
