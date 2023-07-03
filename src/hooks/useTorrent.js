import { useState, useEffect } from "react";

export const useTorrent = (searchTerm) => {
  const baseTorrentURL = process.env.REACT_APP_TORRENT_BASE_URL;
  const [torrents, setTorrents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fullURL = `${baseTorrentURL}/search/${encodeURIComponent(
      searchTerm
    )}`;

    setLoading(true);
    setError(null);

    fetch(fullURL)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setLoading(false);
        setTorrents(json);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });

    return () => {};
  }, [searchTerm, baseTorrentURL]);

  return { torrents, loading, error };
};
