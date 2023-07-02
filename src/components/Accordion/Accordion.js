import { useState } from "react";

export const Accordion = ({ id, title, size, seeds, time, peers, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="max-w bg-gray-800 border border-gray-300 rounded-lg p-4 mb-2 ">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">Torrent #{id + 1}</h3>
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
        <div class="mt-6 border-gray-200 dark:border-gray-300 dark:bg-gray-800">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            <span className="font-bold text-white">Title:</span> {title}
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            <span className="font-bold text-white">Size:</span> {size}
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            <span className="font-bold text-white">Seeds:</span> {seeds}
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            <span className="font-bold text-white">Peers:</span> {peers}
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            <span className="font-bold text-white">Uploaded:</span> {time}
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            <a
              href={desc}
              class="text-blue-600 dark:text-blue-500 hover:underline"
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
