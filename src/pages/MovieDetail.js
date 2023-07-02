import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieTorrent, TableHead, TableRow } from "../components";
import { BsFillStarFill, BsQuote } from "react-icons/bs";

import { useTitle } from "../hooks";

import background from "../assets/images/backup.png";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const url = process.env.REACT_APP_TMDB_BASE_URL + `movie/${params.id}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovie(json))
      .catch((err) => console.error("error:" + err));
  }, [params]);

  const {
    poster_path,
    genres,
    title,
    overview,
    tagline,
    release_date,
    runtime,
    vote_average,
    vote_count,
    budget,
    revenue,
    imdb_id,
  } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : background;

  // Set the document title
  useTitle(title);

  // Format the currency
  function formatCurrency(number) {
    const SI_SYMBOL = ["", "k", "M", "B", "T"];
    // Determine the suffix to use based on the number of digits
    const suffix = SI_SYMBOL[Math.floor(Math.log10(Math.abs(number)) / 3)];

    const safeSuffix = suffix !== undefined ? suffix : "";

    // Divide the number by the corresponding power of 1000 and append the suffix
    return (
      (number / Math.pow(1000, SI_SYMBOL.indexOf(suffix))).toLocaleString(
        "en-US",
        {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 2,
        }
      ) +
      " " +
      safeSuffix
    );
  }

  return (
    <main>
      <section className="flex justify-evenly flex-wrap py-5">
        <div className="max-w-xs md:max-w-sm">
          {/* Poster */}
          <img
            className="rounded-xl border-gray-700 shadow-md dark:border-2 dark:border-gray-400"
            src={image}
            alt={`${title} poster`}
          />
          {/* Quote from film */}
          <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white my-10">
            <BsQuote className="text-4xl my-3 text-neutral-300" />
            <p className="ml-4">{tagline}</p>
          </blockquote>
        </div>
        {/* Movie Info */}
        <div className="max-w-xs md:max-w-2xl mx-2 my-4 text-gray-700 dark:text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 my-4 pb-3 dark:text-white">
            {title}
          </h1>
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* Movie plot */}
          <p className="mb-6 text-md md:text-lg text-slate-800 dark:text-slate-300">
            {overview}
          </p>
          {/* Genres */}
          <span className="mr-4 font-bold">Genre:</span>
          <div className="max-w-xl py-5 flex flex-wrap">
            {genres &&
              genres.map((genre) => (
                <span
                  key={genre.id}
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 select-none"
                >
                  {genre.name}
                </span>
              ))}
          </div>

          <hr className="w-48 h-1 mx-auto my-10 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700" />

          {/* Movie Details */}
          <TableHead>
            <TableRow tHead="Release Date" tData={release_date} />
            <TableRow tHead="Runtime" tData={`${runtime} minutes`} />
            <TableRow tHead="Budget" tData={formatCurrency(Number(budget))} />
            <TableRow tHead="Revenue" tData={formatCurrency(Number(revenue))} />
            <TableRow
              tHead="Rating"
              tData={vote_average}
              icon={
                <BsFillStarFill className="inline-block mx-2 py-px text-yellow-400" />
              }
            />
            <TableRow tHead="Reviews" tData={`${vote_count} reviews`} />
          </TableHead>

          <a
            href={`https://www.imdb.com/title/${imdb_id}/`}
            type="button"
            rel="noreferrer"
            target="_blank"
            className="focus:outline-none my-5 w-1/4 text-center text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            IMDB
          </a>
          {title && (
            <MovieTorrent title={`${title} ${release_date.slice(0, 5)}`} />
          )}
        </div>
      </section>
    </main>
  );
};
