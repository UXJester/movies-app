import { useMovieContext } from '../hooks';
import { MovieCard } from '../components';
import '../css/Favorites.css';

export const Favorites = () => {
  const { favorites } = useMovieContext();
  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        <>
          <h2>Your Favorite Movies</h2>
          <div className="movies-grid">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </>
      ) : (
        <div className="favorites-empty">
          <h2>No favorite movies yet</h2>
          <p>Here you can view and manage your favorite movies.</p>
        </div>
      )}
    </div>
  );
};
