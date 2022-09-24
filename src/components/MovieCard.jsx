import styles from "./MovieCard.module.scss";
import Link from "next/link";
import playButton from "images/playButton.svg";
function MovieCard({ movie, details = false }) {
  const releaseDate = movie.release_date?.slice(0, 4);
  return (
    <div className={styles.container}>
      <h2 className={styles.movieTitleContainer} id="title">
        <Link href={`/details/${movie.id}`}>
          <a className={styles.movieTitle}>{movie.title}</a>
        </Link>
      </h2>
      <span className={styles.voteAvarage}>{movie.vote_average.toFixed(1)}</span>{" "}
      <span className={styles.releaseDate}>{releaseDate}</span>
      <div className={styles.playButton}><img src={playButton.src}/></div>
      <a
        className={styles.movieClick}
        href={`/details/${movie.id}`}
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
