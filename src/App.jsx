import React from 'react'
import TaskCounter from './components/TaskCounter'
import TaskSearch from './components/TaskSearch'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import TaskButton from './components/TaskButton'
import './styles/App.css'

function App () {
  return (
    <div className='App'>
      <TaskCounter />
      <TaskSearch />
      <TaskList>
        <TaskItem />
      </TaskList>
      <TaskButton />
    </div>
  )
}

export default App
