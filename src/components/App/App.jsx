import React from 'react'
import AppUI from './AppUI'
import { TaskProvider } from '../../contexts/TaskProvider/TaskProvider'
import './App.css'

function App () {
  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  )
}

export default App
