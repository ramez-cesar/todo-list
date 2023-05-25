import React, { useState, createContext } from 'react'
import useLocalStorage from '../../Hooks/useLocalStorage/useLocalStorage'

const TaskContext = createContext(null)

function TaskProvider ({ children }) {
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
    <TaskContext.Provider value={{
      loading,
      error,
      totalTask,
      completedTask,
      search,
      setSearch,
      searchList,
      markCompleted,
      deleteTask
    }}
    >
      {
        children
      }
    </TaskContext.Provider>
  )
}

export { TaskContext, TaskProvider }
