import { Link } from "react-router-dom";
import errorImage from "../assets/images/pagenotfound.png";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <figure className="relative max-w-7xl">
            <img
              className="rounded-2xl brightness-25"
              src={errorImage}
              alt="Page not found error."
            />
            <figcaption className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl md:text-8xl text-white">
              <p className="font-bold">404</p>
              <p className="text-xl py-2 md:text-6xl md:py-10">
                Page not found
              </p>
            </figcaption>
          </figure>
          <Link
            to="/"
            className="text-white my-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Go back to home
          </Link>
        </div>
      </section>
    </main>
  );
};
