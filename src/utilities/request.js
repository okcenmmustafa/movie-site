import axios from "axios";

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function searchMovie(value, page) {
  return await axios
    .create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    })
    .get("search/movie", {
      params: {
        api_key: "d1b38123d56e970dcbee0d95330845fa",
        query: value,
        page: page,
      },
    });
}
export async function fetchPopular(page) {
  return await axios
    .create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    })
    .get("movie/popular", {
      params: {
        api_key: "d1b38123d56e970dcbee0d95330845fa",
        page: page,
      },
    });
}
