import React, { useContext } from 'react'
import { IconSearch } from '@tabler/icons-react'
import { TaskContext } from '../../contexts/TaskProvider/TaskProvider'
import './TaskSearch.css'

export default function TaskSearch () {
  const { search, setSearch } = useContext(TaskContext)

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
