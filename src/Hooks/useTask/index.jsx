import { useState } from 'react'
import useLocalStorage from '../useLocalStorage'

export default function UseTask () {
  // Se reciben y renombran (item y saveItem) los valores retornados del Custom Hook
  const { item: tasks, saveItem: saveTasks, loading, error } = useLocalStorage('TASK_LIST_V1', [])

  // Estado para el buscador
  const [search, setSearch] = useState('')

  // Estado para el Modal
  const [openModal, setOpenModal] = useState(false)

  const searchList = tasks.filter(task => {
    const taskList = task.task.toLocaleLowerCase()
    return taskList.includes(search.toLocaleLowerCase())
  })

  const addTask = (taskText) => {
    const copyTaskList = [...tasks]
    copyTaskList.push({
      task: taskText,
      completed: false
    })

    saveTasks(copyTaskList)
  }

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

  return {
    loading,
    error,
    search,
    setSearch,
    openModal,
    setOpenModal,
    searchList,
    addTask,
    markCompleted,
    deleteTask,
    totalTask,
    completedTask
  }
}
