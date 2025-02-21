import { io } from 'socket.io-client'

const socket = io('http://localhost:8080')

export const subscribeToTaskUpdates = (callback: (task: any) => void) => {
  socket.on('taskUpdate', callback)
}

export const unsubscribeFromTaskUpdates = () => {
  socket.off('taskUpdate')
}
