export const Accordion = ({ id, title, size, seeds, time, peers, desc }) => {
  return (
    <>
      <h2 id={`#accordion-collapse-heading-${id + 1}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target={`#accordion-collapse-body-${id + 1}`}
          aria-expanded="true"
          aria-controls={`accordion-collapse-body-${id + 1}`}
        >
          <span>Torrent #{id + 1}</span>
          <svg
            data-accordion-icon
            className="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id={`#accordion-collapse-body-${id + 1}`}
        className="hidden"
        aria-labelledby={`accordion-collapse-heading-${id + 1}`}
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">{seeds}</p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">{peers}</p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">{size}</p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">{time}</p>
          <p className="text-gray-500 dark:text-gray-400">
            <a
              href={desc}
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
