import { useTorrent } from "../hooks";
import { Accordion, ErrorToast, ListLoading } from "../components";

export const MovieTorrent = ({ title }) => {
  // Torrent info about the movie
  const { torrents, loading, error } = useTorrent(title);
  return (
    <div>
      {error ? <ErrorToast errorMessage={error} /> : null}
      {loading ? <ListLoading /> : null}

      {torrents.length > 0 && (
        <>
          <h2 className="my-6 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white select-none">
            Torrents
          </h2>
          {torrents.map(({ title, size, seeds, time, peers, desc }, index) => {
            return (
              <Accordion
                key={index}
                id={index}
                title={title}
                size={size}
                seeds={seeds}
                peers={peers}
                time={time}
                desc={desc}
              />
            );
          })}
        </>
      )}
      {/* 
      torrent not found error
       (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            No torrents found
          </p>
        </div>
      )
       */}
    </div>
  );
};
