import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import background from "../assets/images/backup.png";

export const MovieDetail = () => {
  const params = useParams();
  const [data, setData] = useState({});

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
  } = data;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : background;

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
      .then((json) => setData(json))
      .catch((err) => console.error("error:" + err));
  }, [params]);

  return (
    <main>
      <section className="flex justify-evenly flex-wrap py-5">
        <div className="max-w-xs md:max-w-sm">
          <img className="rounded-xl" src={image} alt={`${title} poster`} />
          <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white my-10">
            <svg
              aria-hidden="true"
              className="w-10 h-10 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <p>{tagline}</p>
          </blockquote>
        </div>
        <div className="max-w-xs md:max-w-xl mx-5 my-4 text-gray-700 text-lg dark:text-white">
          <h1 className="text-6xl font-bold text-gray-900 my-4  pb-4 dark:text-white">
            {title}
          </h1>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <p className="mb-6">{overview}</p>
          <span className="mr-4">Tags:</span>
          <div className="max-w-xl py-5 flex flex-wrap">
            {genres &&
              genres.map((genre) => (
                <span
                  key={genre.id}
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 select-none"
                >
                  {genre.name}
                </span>
              ))}
          </div>

          <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700" />

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 text-center">
              <thead className="text-md text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-slate-300 dark:bg-slate-700"
                  >
                    Parameters
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-slate-200 dark:bg-slate-600 text-center"
                  >
                    Info
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Runtime
                  </th>
                  <td className="px-6 py-4">{runtime} minutes</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Budget
                  </th>
                  <td className="px-6 py-4">$ {budget}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Revenue
                  </th>
                  <td className="px-6 py-4">$ {revenue}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Release Date
                  </th>
                  <td className="px-6 py-4">{release_date}</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Rating
                  </th>
                  <td className="px-6">
                    <div className="flex flex-col md:flex-row justify-center my-6">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Rating star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                          {vote_average}
                        </p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <p className="text-sm font-medium text-gray-900 hover:no-underline dark:text-white">
                          {vote_count} reviews
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a
            href={`https://www.imdb.com/title/${imdb_id}/`}
            type="button"
            rel="noreferrer"
            target="_blank"
            className="focus:outline-none my-5 w-1/4 text-center text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            IMDB
          </a>

          {/* <div className="max-w-md">
            <h1 className="text-3xl font-bold pb-6">General Info:</h1>
            <ul>
              <li className="my-4">
                <span className="font-bold">Runtime:</span> {runtime} min.
              </li>
              <li className="my-4">
                <span className="font-bold">Budget:</span> $ {budget}
              </li>
              <li className="my-4">
                <span className="font-bold">Revenue:</span> $ {revenue}
              </li>
              <li className="my-4">
                <span className="font-bold">Release Date:</span> {release_date}
              </li>
              <li className="my-6 w-fit focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
                <a href={`https://www.imdb.com/title/${imdb_id}`}>IMDB</a>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </main>
  );
};
