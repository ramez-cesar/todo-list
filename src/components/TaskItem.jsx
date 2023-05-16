import React from 'react'
import { IconCircleCheck, IconTrash } from '@tabler/icons-react'
import '../styles/TaskItem.css'

export default function TaskItem ({ task, completed, taskCompleted, deleteTask }) {
  const markCompleted = completed ? 'Check-completed' : ''

  return (
    <li className='task-li'>
      <span className={`task-completedSpan ${markCompleted}`} onClick={taskCompleted}>
        <IconCircleCheck className='task-completedIcon' />
      </span>

      <div className='task-containerText'>
        <p className={`task-text ${markCompleted}`}>
          {
            task
          }
        </p>
      </div>

      <span className='task-deleteSpan' onClick={deleteTask}>
        <IconTrash className='task-deletedIcon' />
      </span>
    </li>
  )
}
