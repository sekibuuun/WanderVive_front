import Header from './components/header';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import TopPage from './components/topPage';
import ArtistPage from './components/ArtistPageComponents/ArtistPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TopPage />,
    children: [
      {
        path: '/artist',
        element: <ArtistPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
