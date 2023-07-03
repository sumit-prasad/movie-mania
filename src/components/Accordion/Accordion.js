import { useState } from "react";

export const Accordion = ({ id, title, size, seeds, time, peers, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="max-w bg-emerald-600 dark:bg-gray-700 border-gray-300 rounded-lg p-4 mb-2 select-none">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold text-white dark:text-neutral-200">
          Torrent Link #{id + 1}
        </h3>
        <svg
          className={`w-5 h-5 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="max-w mt-6 break-words text-white border-gray-200 dark:border-gray-300 ">
          <p className="mb-2">
            <span className="dark:font-bold text-black dark:text-white">
              Title:
            </span>{" "}
            {title}
          </p>
          <p className="mb-2">
            <span className="dark:font-bold text-black dark:text-white">
              Size:
            </span>{" "}
            {size}
          </p>
          <p className="mb-2">
            <span className="dark:font-bold text-black dark:text-white">
              Seeds:
            </span>{" "}
            {seeds}
          </p>
          <p className="mb-2">
            <span className="dark:font-bold text-black dark:text-white">
              Peers:
            </span>{" "}
            {peers}
          </p>
          <p className="mb-2">
            <span className="dark:font-bold text-black dark:text-white">
              Uploaded:
            </span>{" "}
            {time}
          </p>
          <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-500"></hr>
          <p className="text-gray-500 dark:text-gray-400">
            <a
              href={desc}
              className="text-white px-5 py-3 rounded-md bg-blue-700 dark:bg-emerald-600"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </p>
        </div>
      )}
    </div>
  );
};
