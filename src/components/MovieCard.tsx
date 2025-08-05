import type { Movie } from '../types';
import { useMovieContext } from '../hooks';
import '../css/MovieCard.css';

export const MovieCard = (props: Movie) => {
  const { id, title, poster_path, release_date } = props;

  const { isFavorite, addFavorite, removeFavorite } = useMovieContext();
  const favorite = isFavorite(id);

  function toggleFavorite(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (favorite) {
      removeFavorite(id);
    } else {
      addFavorite({ id, title, poster_path, release_date });
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? 'active' : ''}`}
            onClick={toggleFavorite}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
};
