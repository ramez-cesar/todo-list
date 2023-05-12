import React, { useState } from 'react'
import TaskCounter from './components/TaskCounter'
import TaskSearch from './components/TaskSearch'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import TaskButton from './components/TaskButton'
import './styles/App.css'

const fakeTask = [
  { task: 'Ver curso de Vite', completed: true },
  { task: 'Ver curso de React', completed: false },
  { task: 'Ver curso de React: Patrones de render', completed: false }
]

const totalTask = fakeTask.length
const completedTask = fakeTask.filter(task => task.completed === true).length

function App () {
  const [search, setSearch] = useState('')

  const searchList = fakeTask.filter(task => {
    const taskList = task.task.toLocaleLowerCase()
    return taskList.includes(search.toLocaleLowerCase())
  })

  return (
    <div className='App'>
      <TaskCounter totalTask={totalTask} completedTask={completedTask} />
      <TaskSearch search={search} setSearch={setSearch} />
      <TaskList>
        {
          searchList.map(({ task }) => (
            <TaskItem key={task} task={task} />
          ))
        }
      </TaskList>
      <TaskButton />
    </div>
  )
}

export default App
