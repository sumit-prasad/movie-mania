import { useState, useEffect } from "react";

export const useFetch = (apiEndPoint, query = "") => {
  const [data, setData] = useState([]);
  const baseURL = process.env.REACT_APP_TMDB_BASE_URL;

  //   test code
  //   useEffect(() => {
  //     setData(JSON.parse(localStorage.getItem("movies")));
  //   }, []);

  useEffect(() => {
    async function fetchMovies() {
      let fullURL = "";
      query === ""
        ? (fullURL = baseURL + apiEndPoint)
        : (fullURL = baseURL + apiEndPoint + "?query=" + query);

      fetch(fullURL, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setData(json.results);
        })
        .catch((err) => console.error("error:" + err));
    }

    fetchMovies();
  }, [apiEndPoint, baseURL, query]);

  return { data };
};
