import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from './pages/public/Home.jsx';
import { PublicLayout } from './templates/PublicLayout.jsx';
import { MoviesPage } from './pages/public/Movies.jsx';
import { CategoriesPage } from "./pages/public/Categories";
import { LoginPage } from "./pages/public/Login";
import { RegisterPage } from "./pages/public/Register.jsx";
import { NotFoundPage } from './pages/public/NotFound.jsx';
import { CategoryInnerPage } from './pages/public/CategoryInner.jsx';
import { MovieInnerPage } from './pages/public/MovieInner.jsx';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />} >
          <Route path='/' index element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movie' element={<MovieInnerPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/categories/:category' element={<CategoryInnerPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

