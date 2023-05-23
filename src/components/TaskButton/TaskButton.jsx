import React from 'react'
import { IconPlus } from '@tabler/icons-react'
import './TaskButton.css'

export default function TaskButton () {
  return (
    <button className='task-button'>
      <IconPlus className='task-addIcon' />
    </button>
  )
}
