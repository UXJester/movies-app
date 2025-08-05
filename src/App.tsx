import { Routes, Route } from 'react-router-dom';
import { Home, Favorites } from './pages';
import { NavBar } from './components';
import { MovieProvider } from './contexts';
import './css/App.css';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
