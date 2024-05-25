import './App.css';
import { Routes, Route } from 'react-router-dom';
import TelaProduto from './components/TelaProduto';
import FinalizarCompra from './components/FinalizarCompra';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<TelaProduto />} />
      <Route path="/FinalizarCompra" element={<FinalizarCompra />} />
    </Routes>
  );
}

export default App;