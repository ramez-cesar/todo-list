/* eslint-disable no-undef */
import React, { useState } from 'react'
import TaskCounter from './components/TaskCounter'
import TaskSearch from './components/TaskSearch'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import TaskButton from './components/TaskButton'
import './styles/App.css'

function App () {
  // Variable que guarda el valor parseado de los datos en LS (si existen) o es un array en su valor por defecto
  let parseItem
  const getLocalStorageTasks = localStorage.getItem('TASK_LIST_V1')

  if (!getLocalStorageTasks) {
    localStorage.setItem('TASK_LIST_V1', JSON.stringify([]))
    parseItem = []
  } else {
    parseItem = JSON.parse(getLocalStorageTasks)
  }

  const [search, setSearch] = useState('')
  const [tasks, setTasks] = useState(parseItem)

  const searchList = tasks.filter(task => {
    const taskList = task.task.toLocaleLowerCase()
    return taskList.includes(search.toLocaleLowerCase())
  })

  const markCompleted = (taskText) => {
    const findTask = tasks.findIndex(task => task.task === taskText)
    const copyTaskList = [...tasks]

    if (copyTaskList[findTask].completed === true) {
      copyTaskList[findTask].completed = false
    } else {
      copyTaskList[findTask].completed = true
    }

    setTasks(copyTaskList)
  }

  const deleteTask = (taskText) => {
    const findTask = tasks.findIndex(task => task.task === taskText)
    const copyTaskList = [...tasks]
    copyTaskList.splice(findTask, 1)

    setTasks(copyTaskList)
  }

  const totalTask = tasks.length
  const completedTask = tasks.filter(task => task.completed === true).length

  return (
    <div className='App'>
      <TaskCounter totalTask={totalTask} completedTask={completedTask} />
      <TaskSearch search={search} setSearch={setSearch} />
      <TaskList>
        {
          searchList.map(({ task, completed }) => (
            <TaskItem
              key={task}
              task={task}
              completed={completed}
              taskCompleted={() => markCompleted(task)}
              deleteTask={() => deleteTask(task)}
            />
          ))
        }
      </TaskList>
      <TaskButton />
    </div>
  )
}

export default App
