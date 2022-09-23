import styles from "features/details/details.module.scss";
const DetailPage = ({ movie, similarMovies }) => {
  console.log(movie);
  return (
    <div className={styles.detailsContainer}>
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
              Movie Title : {movie.title}
            </span>
            <span className={styles.movieTitleContainer}>
              Movie Rating : {movie.vote_average}
            </span>{" "}
            <span className={styles.movieTitleContainer}>
              Movie Release Date :{movie.release_date}
            </span>{" "}
            <span className={styles.movieTitleContainer}>
              Movie Title : {movie.title}
            </span>{" "}
            <span className={styles.movieTitleContainer}>
              Movie Title : {movie.title}
            </span>{" "}
            <span className={styles.movieTitleContainer}>
              Movie Title : {movie.title}
            </span>{" "}
            <span className={styles.movieTitleContainer}>
              Movie Title : {movie.title}
            </span>
            <span className={styles.releaseDate}></span>
          </div>
          <div>{movie.overview}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
