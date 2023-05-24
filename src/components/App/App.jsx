import React, { useState } from 'react'
import useLocalStorage from '../../Hooks/useLocalStorage/useLocalStorage'
import AppUI from './AppUI'
import './App.css'

function App () {
  // Se reciben y renombran (item y saveItem) los valores retornados del Custom Hook
  const { item: tasks, saveItem: saveTasks, loading, error } = useLocalStorage('TASK_LIST_V1', [])
  const [search, setSearch] = useState('')

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

    saveTasks(copyTaskList)
  }

  const deleteTask = (taskText) => {
    const findTask = tasks.findIndex(task => task.task === taskText)
    const copyTaskList = [...tasks]
    copyTaskList.splice(findTask, 1)

    saveTasks(copyTaskList)
  }

  const totalTask = tasks.length
  const completedTask = tasks.filter(task => task.completed === true).length

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTask={totalTask}
      completedTask={completedTask}
      search={search}
      setSearch={setSearch}
      searchList={searchList}
      markCompleted={markCompleted}
      deleteTask={deleteTask}
    />
  )
}

export default App