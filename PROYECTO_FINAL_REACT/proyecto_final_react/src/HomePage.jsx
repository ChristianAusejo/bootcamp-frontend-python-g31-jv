import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from './useStore';
import ConfirmModal from './ConfirmModal';

export default function HomePage() {
  const { tasks, fetchTasks, deleteTask } = useStore();
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    if (fetchTasks) fetchTasks();
  }, [fetchTasks]);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Lista de Tareas</h1>
      {tasks.length === 0 ? (
        <p>No hay tareas escritas. <Link to="/crear">Crea una aquí</Link></p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} style={{ border: '1px solid #ccc', borderRadius: '6px', padding: '1rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0 }}>{task.title}</h3>
              <p style={{ margin: '0.5rem 0 0 0', color: '#555' }}>{task.description}</p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link to={`/editar/${task.id}`} style={{ padding: '0.3rem 0.6rem', border: '1px solid #ccc', borderRadius: '4px', textDecoration: 'none', color: '#000' }}>
                Editar
              </Link>
              <button onClick={() => setSelectedTask(task)} style={{ background: '#ff4d4d', color: '#fff', border: 'none', padding: '0.3rem 0.6rem', borderRadius: '4px', cursor: 'pointer' }}>
                Eliminar
              </button>
            </div>
          </div>
        ))
      )}

      {selectedTask && (
        <ConfirmModal
          isOpen={true}
          taskTitle={selectedTask.title}
          onClose={() => setSelectedTask(null)}
          onConfirm={() => {
            deleteTask(selectedTask.id);
            setSelectedTask(null);
          }}
        />
      )}
    </div>
  );
}