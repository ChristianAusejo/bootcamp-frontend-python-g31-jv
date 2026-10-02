import { create } from 'zustand';

const API_URL = 'https://apibox.vercel.app/api/tasks';

export const useStore = create((set, get) => ({
  tasks: [],
  loading: false,

  fetchTasks: async () => {
    set({ loading: true });
    try {
      const res = await fetch(API_URL);
      if (res.ok) {
        const data = await res.json();
        set({ tasks: data, loading: false });
      } else {
        throw new Error();
      }
    } catch {
      const localData = JSON.parse(localStorage.getItem('mis_tareas')) || [];
      set({ tasks: localData, loading: false });
    }
  },

  addTask: async (newTask) => {
    const taskWithId = { ...newTask, id: Date.now().toString() };
    const updated = [...get().tasks, taskWithId];
    
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskWithId)
    }).catch(() => {});

    localStorage.setItem('mis_tareas', JSON.stringify(updated));
    set({ tasks: updated });
  },

  updateTask: async (id, updatedTask) => {
    const updated = get().tasks.map((t) => (t.id === id ? { ...updatedTask, id } : t));
    
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask)
    }).catch(() => {});

    localStorage.setItem('mis_tareas', JSON.stringify(updated));
    set({ tasks: updated });
  },

  deleteTask: async (id) => {
    const updated = get().tasks.filter((t) => t.id !== id);

    fetch(`${API_URL}/${id}`, { method: 'DELETE' }).catch(() => {});

    localStorage.setItem('mis_tareas', JSON.stringify(updated));
    set({ tasks: updated });
  }
}));