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
        <div className={styles.watchNow}> WATCH THE MOVIE NOW</div>

          <div className={styles.details}>
            <span >
               Title  <span>{movie.title}</span>
            </span>
            <span >
               Rating <span className={styles.info}>{movie.vote_average.toFixed(1)}</span>
            </span>
            <span >
               Release Date  <span className={styles.info}>{movie.release_date}</span>
            </span>
            <span >
               Genres  <span className={styles.info}>{genres}</span>
            </span>
            <span >
               Languages  <span className={styles.info}>{languages}</span>
            </span>
            <span >
               Status  <span className={styles.info}>{movie.status}</span>
            </span>{" "}
          </div>
        </div>
      </div>
      <div className={styles.overview}>{movie.overview}</div>
      <h3 className={styles.similarMovies}>Similar Movies</h3>
      <MovieList movies={similarMovies}/>
    </div>
  );
};

export default DetailPage;
