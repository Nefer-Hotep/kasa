import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Headers';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rental from './pages/Rental';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      // Structure de la page principale
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: (
      // Élément affiché en cas d'erreur de routage
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    ),
    // Définition des routes enfants
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about/',
        element: <About />,
      },
      {
        // Chemin pour les détails de location avec un paramètre d'URL
        path: '/rental/:id',
        element: <Rental />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  // Rendu du composant App qui fournit le routeur à l'application
  return <RouterProvider router={router} />;
}

export default App;
