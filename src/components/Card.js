import { Link } from "react-router-dom";
import background from "../assets/images/backup.png";

export const Card = ({ movie }) => {
  const { id, title, release_date, overview, poster_path } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : background;

  return (
    // Card
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3 text-left">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-xl" src={image} alt={`${title} Poster`} />
      </Link>
      <div className="p-4">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title} - <span>{release_date}</span>
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
          {overview}
        </p>
      </div>
    </div>
  );
};
