import React from 'react'
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

function App () {
  return (
    <div className='App'>
      <TaskCounter />
      <TaskSearch />
      <TaskList>
        {
          fakeTask.map(({ task }) => (
            <TaskItem key={task} task={task} />
          ))
        }
      </TaskList>
      <TaskButton />
    </div>
  )
}

export default App
