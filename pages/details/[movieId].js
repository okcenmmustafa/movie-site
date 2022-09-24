import Details from "features/details";
import request from "utilities/request";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export async function getStaticProps({ params }) {
  try {
    const movieResponse = await request.get(`movie/${params.movieId}`, {
      params: {
        api_key: "d1b38123d56e970dcbee0d95330845fa",
      },
    });
    const similarResponse = await request.get(
      `movie/${params.movieId}/similar`,
      {
        params: {
          api_key: "d1b38123d56e970dcbee0d95330845fa",
        },
      }
    );
    const [movie, similarMovies] = [movieResponse.data, similarResponse.data.results];
    return {
      props: {
        movie: movie,
        similarMovies: similarMovies,
      },
      revalidate: 60,
    };
  } catch (e) {
    console.error(e);

    return {
      notFound: true,
      revalidate: 5,
    };
  }
}

export default function HomePageNext({ movie, similarMovies }) {
  return (
    <div>
      <Details movie={movie} similarMovies={similarMovies} />
    </div>
  );
}
