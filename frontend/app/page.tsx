'use client'

import React, { useState, useEffect } from 'react';
import { subscribeToTaskUpdates } from '../utils/websocket'

interface Task {
  id: number;
  // Add other task properties
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToTaskUpdates((updatedTask: Task) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Use tasks in your component, e.g.:
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>{/* Render task */}</div>
      ))}
    </div>
  );
}
