import Homepage from "features/homepage";
import AppTemplate from "features/templates/AppTemplate";
import FadeInTemplate from "features/templates/FadeInTemplate";
import { useEffect } from "react";

import request from "utilities/request";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export async function getStaticProps({ params }) {
  try {
    const response = await request.get("search/movie", {
      params: {
        api_key: "d1b38123d56e970dcbee0d95330845fa",
        query: params.searchValue,
      },
    });
    const movieList = response.data;
    return {
      props: {
        movieList: movieList,
        query: params.searchValue,
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
