import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiEndPoint, title }) => {
  const { data: movies } = useFetch(apiEndPoint);

  // Set the document title dynamically
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-4">
        <div className="flex flex-wrap justify-evenly">
          {movies &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};
