import Header from './components/header/header';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ArtistPage from './components/artist/artistPage';
import { TopPage } from './components/top/topPage';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/bands/:artist" element={<ArtistPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
