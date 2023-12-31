import { useSearchParams } from "react-router-dom";
import { Card, ErrorToast, Loading } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiEndPoint }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { data: movies, loading, error } = useFetch(apiEndPoint, query);

  // Set the document title dynamically
  useTitle(`Search results for "${query}"`);

  return (
    <main>
      {error ? <ErrorToast errorMessage={error} /> : null}
      {loading ? (
        <Loading />
      ) : (
        <>
          <section>
            <p className="text-4xl text-gray-700 my-8 p-6 text-center dark:text-white">
              {movies.length
                ? `Search results for "${query}"`
                : `No results found for "${query}" `}
            </p>
          </section>
          <section className="max-w-7xl mx-auto py-4">
            <div className="flex flex-wrap justify-start">
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
};
