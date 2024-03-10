import { Box } from '@chakra-ui/react';
import Header from './components/header';
import { SmallArtistCard } from './components/smallArtistCard';
function App() {
  return (
    <>
      <Header />
      <Box paddingX={8}><SmallArtistCard /></Box>
      
    </>
  );
}

export default App;
