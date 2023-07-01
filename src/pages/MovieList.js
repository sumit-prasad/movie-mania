import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiEndPoint }) => {
  const { data: movies } = useFetch(apiEndPoint);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-4">
        <div className="flex flex-wrap justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
