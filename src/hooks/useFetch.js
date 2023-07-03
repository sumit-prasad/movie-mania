import { useState, useEffect } from "react";

export const useFetch = (apiEndPoint, query = "") => {
  const baseURL = process.env.REACT_APP_TMDB_BASE_URL;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   test code
  //   useEffect(() => {
  //     setData(JSON.parse(localStorage.getItem("movies")));
  //   }, []);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      setError(null);

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
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setLoading(false);
          setData(json.results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }

    fetchMovies();
  }, [apiEndPoint, baseURL, query]);

  return { data, loading, error };
};
