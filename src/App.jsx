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
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'rental',
        element: <Rental />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
