import { io } from 'socket.io-client';

const socket = io('http://localhost:8080');

interface Task {
  id: number;
  name: string;
  description: string;
  // Add other task properties as needed
}

export const subscribeToTaskUpdates = (callback: (taskUpdateData: Task) => void) => {
  socket.on('taskUpdate', callback);
};
