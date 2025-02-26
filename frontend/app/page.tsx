'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import AIChat from '../components/AIChat';

export default function Home() {
  const [tasks, setTasks] = useState<{ id: number; name: string; description: string }[]>([]);

  const addTask = (task: { id: number; name: string; description: string }) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} />
        <AIChat />
      </main>
    </div>
  );
}
