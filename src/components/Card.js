import { Link } from "react-router-dom";
import background from "../assets/images/backup.png";

export const Card = ({ movie }) => {
  const { id, title, release_date, poster_path } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : background;

  return (
    // Card
    <div className="max-w-sm bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-700 m-3 text-left">
      <figure className="max-w-sm transition-all duration-300">
        <Link to={`/movie/${id}`}>
          <img
            className="rounded-t-lg brightness-25 hover:transition-all hover:duration-300 hover:brightness-75"
            src={image}
            alt={`${title} Poster`}
          />
        </Link>
      </figure>

      <div className="p-4">
        <Link to={`/movie/${id}`} className="">
          <h5 className="text-4xl md:text-3xl font-bold tracking-tight mb-2 text-slate-700 dark:text-white">
            {title}
          </h5>
          <span className="text-sm md:text-md text-slate-600 dark:text-slate-300">
            Release Date: {release_date}
          </span>
        </Link>
      </div>
    </div>
  );
};
