import React from 'react'
import { IconCircleCheck, IconTrash } from '@tabler/icons-react'
import '../styles/TaskItem.css'

export default function TaskItem ({ task }) {
  return (
    <li className='task-li'>
      <span className='task-completedSpan'>
        <IconCircleCheck className='task-completedIcon' />
      </span>

      <div className='task-containerText'>
        <p className='task-text'>
          {
            task
          }
        </p>
      </div>

      <span className='task-deleteSpan'>
        <IconTrash className='task-deletedIcon' />
      </span>
    </li>
  )
}
