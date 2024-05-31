import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListOfCarts from './components/ListOfCarts';
import Navbar from './components/Navbar';
import AddCarts from './pages/AddCarts';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListOfCarts />} />
        <Route path="/addToCart" element={<AddCarts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
