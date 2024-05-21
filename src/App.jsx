import { useLocation } from 'react-router-dom';
import { Header } from "./components/Header";
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import Page from './components/Page';

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div id='bodyDiv' className='flex-col max-vh'>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main className='flex-1'>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
