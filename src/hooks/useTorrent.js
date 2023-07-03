import { useState, useEffect } from "react";

export const useTorrent = (searchTerm) => {
  const baseTorrentURL = process.env.REACT_APP_TORRENT_BASE_URL;
  const [torrents, setTorrents] = useState(null);

  useEffect(() => {
    const fullURL = `${baseTorrentURL}/search/${encodeURIComponent(
      searchTerm
    )}`;

    fetch(fullURL)
      .then((res) => res.json())
      .then((json) => setTorrents(json))
      .catch((err) => console.error("error:" + err));

    return () => {};
  }, [searchTerm, baseTorrentURL]);

  return { torrents };
};
