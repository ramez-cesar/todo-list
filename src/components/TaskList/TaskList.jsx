import React from 'react'
import './TaskList.css'

export default function TaskList ({ children }) {
  return (
    <section className='task-container'>
      <ul className='task-ul'>
        {
          children
        }
      </ul>
    </section>
  )
}
