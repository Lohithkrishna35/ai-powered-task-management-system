import React, { useEffect, useState } from 'react';
import { useEffect } from 'react'
import { subscribeToTaskUpdates, unsubscribeFromTaskUpdates } from '../utils/websocket'


// ... (previous code)

interface Task {
    id: number;
    // Add other properties your task object has
  }
  
  // In your component:
  const [tasks, setTasks] = useState<Task[]>([]);
  
  useEffect(() => {
    subscribeToTaskUpdates((updatedTask: Task) => {
      setTasks((prevTasks: Task[]) =>
        prevTasks.map((task: Task) => (task.id === updatedTask.id ? updatedTask : task))
      );
    });
  
    return () => {
      unsubscribeFromTaskUpdates();
    };
  }, []);
  
// ... (rest of the component)
