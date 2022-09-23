import styles from "./MovieCard.module.scss";
import Link from "next/link";
import playButton from "images/playButton.svg";
function MovieCard({ movie, details = false }) {
  console.log(movie);
  const releaseDate = movie.release_date?.slice(0, 4);
  return (
    <div className={styles.container}>
      <h2 className={styles.movieTitleContainer}>
        <Link href={`/details/${movie.id}`}>
          <a className={styles.movieTitle}>{movie.title}</a>
        </Link>
      </h2>
      <span className={styles.uhd}>{movie.vote_average}</span>{" "}
      <span className={styles.releaseDate}>{releaseDate}</span>
      <a
        className={styles.titleYellow}
        href={`/details/${movie.id}`}
        title="Filmi izle"
      />
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
    </div>
  );
}

export default MovieCard;
