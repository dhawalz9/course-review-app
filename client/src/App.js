import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cources from './pages/Cources';
import Professors from './pages/Professors';
import Dashboard from './pages/user/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cources" element={<Cources />} />
        <Route path="/professors" element={<Professors />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
