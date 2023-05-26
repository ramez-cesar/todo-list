import React, { useContext } from 'react'
import TaskCounter from '../TaskCounter/TaskCounter'
import TaskSearch from '../TaskSearch/TaskSearch'
import TaskList from '../TaskList/TaskList'
import TaskItem from '../TaskItem/TaskItem'
import TaskButton from '../TaskButton/TaskButton'
import { TaskContext } from '../../contexts/TaskProvider/TaskProvider'

export default function AppUI () {
  const {
    loading,
    error,
    searchList,
    markCompleted,
    deleteTask
  } = useContext(TaskContext)

  return (
    <div className='App'>
      <TaskCounter />
      <TaskSearch />
      <TaskList>
        {
          // si "variable" = true, agrega un texto, si no, agrega "null"
          loading
            ? <p className='message msg-loading'><span className='loader' /> Cargando tareas...</p>
            : null
        }
        {
          error
            ? <p className='message msg-error'>Hubo un error, intenta otra vez...</p>
            : null
        }
        {
          (!loading && searchList.length === 0)
            ? <p className='message msg-empty'>No tienes ninguna tarea creada.</p>
            : null
        }

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
