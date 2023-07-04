import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="p-4 border-t bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <p className="flex flex-wrap px-3 text-sm justify-center text-gray-500 text-center dark:text-gray-400">
        <Link to="/" className="">
          &copy; Movie Mania - {new Date().getFullYear()}
        </Link>
      </p>
      <ul className="flex flex-wrap px-3 justify-center items-center mt-3 text-lg text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://github.com/sumit-prasad"
            rel="noreferrer"
            target="_blank"
            className="mr-4 hover:underline md:mr-6"
          >
            <BsGithub className="inline-block mr-2 text-black md:text-slate-400 hover:md:text-black" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
