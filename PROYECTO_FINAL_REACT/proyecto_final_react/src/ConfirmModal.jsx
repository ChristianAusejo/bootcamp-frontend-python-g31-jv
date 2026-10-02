export default function ConfirmModal({ isOpen, onClose, onConfirm, taskTitle }) {
  // Si no está abierto, no muestra nada
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', width: '300px', color: '#000' }}>
        <h3 style={{ marginTop: 0 }}>¿Eliminar tarea?</h3>
        <p>¿Seguro que deseas eliminar <strong>{taskTitle}</strong>?</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
          <button onClick={onClose}>Cancelar</button>
          <button onClick={onConfirm} style={{ background: 'red', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
