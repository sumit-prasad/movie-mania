import { useTorrent } from "../hooks";
import { Accordion } from "./Accordion/Accordion";

export const MovieTorrent = ({ title }) => {
  // Torrent info about the movie
  const { torrents } = useTorrent(title);
  return (
    <>
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
    </>
  );
};
