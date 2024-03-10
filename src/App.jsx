import Header from './components/header';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import ArtistPage from './components/artist/artistPage';
import { TopPage } from './components/top/topPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TopPage />,
    children: [
      {
        path: 'artist',
        element: <ArtistPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="artist" element={<ArtistPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
