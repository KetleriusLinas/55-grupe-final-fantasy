import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from './pages/public/Home.jsx';
import { PublicLayout } from './templates/PublicLayout.jsx';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />} >
          <Route path='/' index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

