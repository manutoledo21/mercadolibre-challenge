import { HashRouter, Routes, Route } from 'react-router-dom';
import { TagAppContext } from './components/context/MyAppContext';
import { PageIndex } from './components/pages/PageIndex';
import { PageDetailsProduct } from './components/pages/PageDetailsProduct';

function App() {
  return (
    <HashRouter>
      <TagAppContext>
        <Routes>
          <Route path="/" element={<PageIndex />} />
          <Route path="/items" element={<PageIndex />}></Route>
          <Route path="/items/:id" element={<PageDetailsProduct />}></Route>
        </Routes>
      </TagAppContext>
    </HashRouter>
  );
}

export default App;
