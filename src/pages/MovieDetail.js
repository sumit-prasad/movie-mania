import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";

export const MovieDetail = () => {
  const params = useParams();
  console.log(params.id);

  const { data: movie } = useFetch("movie/" + Number(params.id));
  console.log(movie);

  return <main>Movie Detail</main>;
};
