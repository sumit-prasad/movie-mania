import { Link } from "react-router-dom";
import background from "../assets/images/backup.png";

export const Card = ({ movie }) => {
  const { id, title, release_date, overview, poster_path } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : background;

  return (
    // Card
    <div className="max-w-sm bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-700 m-3 text-left">
      <figure class="relative max-w-sm transition-all duration-300">
        <Link to={`/movie/${id}`}>
          <img
            className="rounded-t-lg md:brightness-25 hover:transition-all hover:duration-300 hover:brightness-75"
            src={image}
            alt={`${title} Poster`}
          />
        </Link>
      </figure>

      <div className="p-4">
        <Link to={`/movie/${id}`} className="">
          <h5 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <span className="text-slate-600 dark:text-slate-300">
            Release Year: {release_date}
          </span>
        </Link>
        <hr class="h-px my-6 bg-gray-700 border-0 dark:bg-gray-200" />
        <span className="text-2xl mb-4 mx-auto text-black dark:text-white">
          Plot:
        </span>
        <p className="mb-3 font-normal text-gray-800 dark:text-slate-400 text-justify">
          <br />
          {overview}
        </p>
      </div>
    </div>
  );
};
