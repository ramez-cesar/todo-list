import React from 'react'
import { IconSearch } from '@tabler/icons-react'
import '../styles/TaskSearch.css'

export default function TaskSearch ({ search, setSearch }) {
  const getValueInput = (e) => {
    const value = e.target.value
    setSearch(value)
  }

  return (
    <form action='' className='task-form'>
      <span className='task-searchSpan'>
        <IconSearch className='task-searchIcon' size={20} />
      </span>

      <input
        value={search}
        onChange={getValueInput}
        className='task-searchInput'
        type='text'
        placeholder='Buscar tarea...'
      />
    </form>
  )
}
