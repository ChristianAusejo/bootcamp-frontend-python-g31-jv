import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '1rem', color: '#fff', display: 'flex', gap: '1rem' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>🏠 Inicio</Link>
      <Link to="/crear" style={{ color: '#fff', textDecoration: 'none' }}>➕ Crear Tarea</Link>
    </nav>
  );
}
