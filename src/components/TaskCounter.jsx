import React from 'react'
import '../styles/TaskCounter.css'

export default function TaskCounter ({ completedTask, totalTask }) {
  return (
    <h1 className='task-counter'>
      Haz completado {completedTask} de {totalTask} tareas.
    </h1>
  )
}
