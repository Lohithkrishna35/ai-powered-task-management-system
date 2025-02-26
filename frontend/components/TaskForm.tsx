import React, { useState } from 'react';

type TaskFormProps = {
  onAddTask: (task: { id: number; name: string; description: string }) => void;
};

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description) return;

    const newTask = {
      id: Date.now(),
      name,
      description,
    };

    onAddTask(newTask);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '10px', marginRight: '10px', width: '200px' }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: '10px', marginRight: '10px', width: '300px' }}
      />
      <button type="submit" style={{ padding: '10px', backgroundColor: '#0070f3', color: '#fff' }}>
        Add Task
      </button>
    </form>
  );
}
