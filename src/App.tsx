import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import FormularioRest from './paginas/admin/FormularioRest';
import AdminRestaurantes from './paginas/admin/AdminRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdminRestaurantes />} />
      <Route path="/admin/formulariorest" element={<FormularioRest />} />
      <Route path="/admin/restaurantes/:id" element={<FormularioRest />} />
    </Routes>
  );
}

export default App;
