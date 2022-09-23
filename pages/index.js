import Homepage from "features/homepage";
import AppTemplate from "features/templates/AppTemplate";
import FadeInTemplate from "features/templates/FadeInTemplate";
import request from "utilities/request";

export async function getStaticProps() {
  try {
    const response = await request.get("movie/popular", {
      params: { api_key: "d1b38123d56e970dcbee0d95330845fa" },
    });
    
    const movieList = response.data;
    return {
      props: {
        movieList: movieList,
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

export default function HomePageNext({ movieList }) {
  return (
    <AppTemplate>
      <FadeInTemplate>
        <Homepage movieList={movieList} />
      </FadeInTemplate>
    </AppTemplate>
  );
}
