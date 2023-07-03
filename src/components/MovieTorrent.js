import { useTorrent } from "../hooks";
import { Accordion, ErrorToast, Loading } from "../components";

export const MovieTorrent = ({ title }) => {
  // Torrent info about the movie
  const { torrents, loading, error } = useTorrent(title);
  return (
    <div>
      <h2 className="my-6 text-2xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white select-none">
        Torrents
      </h2>

      {loading ? <Loading /> : null}
      {error ? <ErrorToast errorMessage={error} /> : null}

      {torrents &&
        torrents.map(({ title, size, seeds, time, peers, desc }, index) => {
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
    </div>
  );
};
