import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Headers';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rental from './pages/Rental';
import About from './pages/About';
import Error from './pages/Error';

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
    children: [
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'Rental',
        element: <Rental />,
      },
      {
        path: 'Error',
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
