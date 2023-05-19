import React, { useState } from 'react'
import AppUI from './components/AppUI'
import './styles/App.css'

function useLocalStorage (itemName, initialValue) {
  // Variable que guarda el valor parseado de los datos en LS (si existen) o es un array en su valor por defecto
  let parseItem
  const localStorageItem = window.localStorage.getItem(itemName)

  if (!localStorageItem) {
    window.localStorage.setItem(itemName, JSON.stringify(initialValue))
    parseItem = initialValue
  } else {
    parseItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parseItem)

  // Función que guarda datos en LS a partir de un array
  const saveItem = (newItemList) => {
    // El array que recibe lo convierte en String para poder guardar los datos en LS
    const newList = JSON.stringify(newItemList)
    window.localStorage.setItem(itemName, newList)

    /**
     * Se actualiza el estado con el array que recibe como argumento
     * No se envía a newList por que esta variable se encarga se convertir el array en String únicamente con el fin de guardar los datos en LS.
     */
    setItem(newItemList)
  }

  return [
    item,
    saveItem
  ]
}

function App () {
  const [tasks, saveTasks] = useLocalStorage('TASK_LIST_V1', [])
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
