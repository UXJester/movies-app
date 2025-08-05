# Movies App

A React-based movie discovery application that allows users to search for movies and manage their favorites using The Movie Database (TMDB) API.

## Features

- 🎬 Browse popular movies
- 🔍 Search for movies by title
- ❤️ Add/remove movies from favorites
- 💾 Persistent favorites using localStorage
- 📱 Responsive design

## Tech Stack

- **React 19** with TypeScript
- **React Router** for navigation
- **Vite** for build tooling
- **TMDB API** for movie data
- **CSS** for styling

## Prerequisites

- Node.js (v16 or higher)
- TMDB API key (free from [The Movie Database](https://www.themoviedb.org/settings/api))

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd movies-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:

   ```env
   REACT_APP_TMDB_API_KEY=your_api_key_here
   REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── MovieCard.tsx   # Individual movie card
│   └── NavBar.tsx      # Navigation bar
├── pages/              # Page components
│   ├── Home.tsx        # Home page with search
│   └── Favorites.tsx   # Favorites page
├── contexts/           # React context providers
│   └── MovieContext.tsx
├── hooks/              # Custom hooks
├── services/           # API service functions
│   └── api.ts
├── types/              # TypeScript type definitions
│   └── Movie.ts
├── css/                # Stylesheets
└── App.tsx             # Main app component
```

## API Integration

The app uses The Movie Database (TMDB) API to fetch:

- Popular movies on the home page
- Search results based on user queries

## State Management

- Uses React Context API for global state management
- Favorites are persisted in localStorage
- Movie context provides methods to add/remove favorites

## License

This project is open source and available under the [MIT License](LICENSE).
