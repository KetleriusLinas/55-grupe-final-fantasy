import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from './pages/public/Home.jsx';
import { PublicLayout } from './templates/PublicLayout.jsx';
import { MoviesPage } from './pages/public/Movies.jsx';
import { CategoriesPage } from "./pages/public/Categories";
import { LoginPage } from "./pages/public/Login";
import { LogoutPage } from "./pages/public/Logout.jsx";
import { RegisterPage } from "./pages/public/Register.jsx";
import { NotFoundPage } from './pages/public/NotFound.jsx';
import { CategoryInnerPage } from './pages/public/CategoryInner.jsx';
import { MovieInnerPage } from './pages/public/MovieInner.jsx';
import { AdminDashboardPage } from './pages/admin/Dashboard.jsx';
import { AdminLayout } from './templates/AdminLayout.jsx';
import { AdminCategoriesAllPage } from './pages/admin/categories/CategoriesAll.jsx';
import { AdminNewCategoryPage } from './pages/admin/categories/NewCategory.jsx';
import { AdminViewCategoryPage } from './pages/admin/categories/ViewCategory.jsx';
import { AdminEditCategoryPage } from './pages/admin/categories/EditCategory.jsx';
import { AdminCategoriesPublishedPage } from './pages/admin/categories/CategoriesPublished.jsx';
import { AdminCategoriesDraftPage } from './pages/admin/categories/CategoriesDraft.jsx';
import { AdminMoviesAllPage } from './pages/admin/movies/MoviesAll';
import { AdminNewMoviePage } from './pages/admin/movies/NewMovie';
import { AdminViewMoviePage } from './pages/admin/movies/ViewMovie';
import { AdminEditMoviePage } from './pages/admin/movies/EditMovie';
import { AdminMoviesPublishedPage } from './pages/admin/movies/MoviesPublished';
import { AdminMoviesDraftPage } from './pages/admin/movies/MoviesDraft';
import { UserContextWrapper } from './context/user/UserContextWrapper.jsx';


export function App() {
  return (
    <UserContextWrapper>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />} >
            <Route path='/' index element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:movie' element={<MovieInnerPage />} />
            <Route path='/categories' element={<CategoriesPage />} />
            <Route path='/categories/:category' element={<CategoryInnerPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/logout' element={<LogoutPage />} />
          </Route>

          <Route element={<AdminLayout />} >
            <Route path='/admin' element={<AdminDashboardPage />} />

            <Route path='/admin/movies' element={<AdminMoviesAllPage />} />
            <Route path='/admin/movies/new' element={<AdminNewMoviePage />} />
            <Route path='/admin/movies/:movie' element={<AdminViewMoviePage />} />
            <Route path='/admin/movies/:movie/edit' element={<AdminEditMoviePage />} />
            <Route path='/admin/movies/published' element={<AdminMoviesPublishedPage />} />
            <Route path='/admin/movies/draft' element={<AdminMoviesDraftPage />} />

            <Route path='/admin/categories' element={<AdminCategoriesAllPage />} />
            <Route path='/admin/categories/new' element={<AdminNewCategoryPage />} />
            <Route path='/admin/categories/:category' element={<AdminViewCategoryPage />} />
            <Route path='/admin/categories/:category/edit' element={<AdminEditCategoryPage />} />
            <Route path='/admin/categories/published' element={<AdminCategoriesPublishedPage />} />
            <Route path='/admin/categories/draft' element={<AdminCategoriesDraftPage />} />


          </Route>

          <Route element={<PublicLayout />} >
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextWrapper>
  );
}

