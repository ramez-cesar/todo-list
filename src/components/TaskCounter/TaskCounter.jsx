import React, { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskProvider/TaskProvider'
import './TaskCounter.css'

export default function TaskCounter () {
  const { completedTask, totalTask } = useContext(TaskContext)

  return (
    <h1 className='task-counter'>
      Haz completado {completedTask} de {totalTask} tareas.
    </h1>
  )
}
