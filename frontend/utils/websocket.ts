import { io } from 'socket.io-client'

const socket = io('http://localhost:8080')

interface Task {
  id: number;
  // Add other task properties
}

export const subscribeToTaskUpdates = (callback: (task: Task) => void) => {
  socket.on('taskUpdate', callback);
  return () => {
    socket.off('taskUpdate', callback);
  };
};
