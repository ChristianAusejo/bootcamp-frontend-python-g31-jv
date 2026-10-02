import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from './useStore';

export default function TaskFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, addTask, updateTask } = useStore();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Carga los datos de la tarea si estamos editando
  useEffect(() => {
    if (id) {
      const task = tasks.find((t) => t.id === id);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
      }
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (id) {
      updateTask(id, { title, description });
    } else {
      addTask({ title, description });
    }
    navigate('/'); 
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>{id ? 'Editar Tarea' : 'Crear Tarea'}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.2rem', boxSizing: 'border-box' }}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.2rem', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ background: '#007bff', color: '#fff', padding: '0.6rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {id ? 'Guardar Cambios' : 'Crear Tarea'}
        </button>
      </form>
    </div>
  );
}
