import Header from './components/header';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import TopPage from './components/topPage';
import ArtistPage from './components/ArtistPageComponents/ArtistPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ArtistPage />,
    children: [
      {
        path: 'artist',
        element: <ArtistPage longitude={135.0} latitude={35.0} />,
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
