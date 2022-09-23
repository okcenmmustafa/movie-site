import Stats from "features/stats";
import request from "utilities/request";
export async function getStaticProps() {
  try {
    const response = await request.get("movie/top_rated", {
      params: { api_key: "d1b38123d56e970dcbee0d95330845fa" },
    });
    const topRated = response.data.results.slice(0,10);
    return {
      props: {
        topRated: topRated,
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

export default function HomePageNext({ topRated }) {
  return (
    <div>
      <Stats topRated={topRated} />
    </div>
  );
}