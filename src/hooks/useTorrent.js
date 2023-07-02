import { useState, useEffect } from "react";

export const useTorrent = (searchTerm) => {
  const baseTorrentURL = "http://localhost:8080/search";
  const [torrents, setTorrents] = useState(null);

  useEffect(() => {
    const fullURL = `${baseTorrentURL}/${encodeURIComponent(searchTerm)}`;

    fetch(fullURL)
      .then((res) => res.json())
      .then((json) => setTorrents(json))
      .catch((err) => console.error("error:" + err));

    return () => {};
  }, [searchTerm]);

  return { torrents };
};
