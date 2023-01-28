import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TagAppContext } from './components/context/MyAppContext';
import { PageIndex } from './components/pages/PageIndex';
import { PageDetailsProduct } from './components/pages/PageDetailsProduct';

function App() {
  return (
    <BrowserRouter>
      <TagAppContext>
        <Routes>
          <Route path="/" element={<PageIndex />} />
          <Route path="/items" element={<PageIndex />}></Route>
          <Route path="/items/:id" element={<PageDetailsProduct />}></Route>
        </Routes>
      </TagAppContext>
    </BrowserRouter>
  );
}

export default App;
