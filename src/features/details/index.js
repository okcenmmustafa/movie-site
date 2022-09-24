import MovieList from "components/MovieList";
import styles from "features/details/details.module.scss";
const DetailPage = ({ movie, similarMovies }) => {
  console.log(similarMovies)
  const genres=movie.genres.map((genre)=>
  <span>{genre.name}</span>
)
const languages=movie.spoken_languages.map((language)=>
<span>{language.english_name}</span>
)

  return (
    <div className={styles.detailsContainer} >
      <div className={styles.movieDetails}>
        <div className={styles.posterContainer}>
          <img
            src={process.env.NEXT_PUBLIC_IMAGE_URL + movie?.poster_path}
            data-src={process.env.NEXT_PUBLIC_IMAGE_URL + movie?.poster_path}
            width="215"
            height="327"
            alt="RRR - Rise Roar Revolt"
            className={styles.poster}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.details}>
            <span className={styles.movieTitleContainer}>
               Title  <span>{movie.title}</span>
            </span>
            <span className={styles.movieTitleContainer}>
               Rating <span className={styles.info}>{movie.vote_average.toFixed(1)}</span>
            </span>{" "}
            <span className={styles.movieTitleContainer}>
               Release Date  <span className={styles.info}>{movie.release_date}</span>
            </span>{" "}
            <span className={styles.movieTitleContainer}>
               Genres  <span className={styles.info}>{genres}</span>
            </span>{" "}
            <span className={styles.movieTitleContainer}>
               Languages  <span className={styles.info}>{languages}</span>
            </span>{" "}
            <span className={styles.movieTitleContainer}>
               Status  <span className={styles.info}>{movie.status}</span>
            </span>{" "}
            
            <span className={styles.releaseDate}></span>
          </div>
         
        </div>
      </div>
      <div className={styles.overview}>{movie.overview}</div>
      <MovieList movies={similarMovies}/>
    </div>
  );
};

export default DetailPage;
