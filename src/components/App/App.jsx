import React from 'react'
import TaskHeader from '../TaskHeader'
import TaskCounter from '../TaskCounter/TaskCounter'
import TaskSearch from '../TaskSearch/TaskSearch'
import TaskList from '../TaskList/TaskList'
import TaskItem from '../TaskItem/TaskItem'
import TaskButton from '../TaskButton/TaskButton'
import Modal from '../Modal/Modal'
import TaskForm from '../TaskForm/TaskForm'
import UseTask from '../../Hooks/useTask'
import './App.css'

function App () {
  const {
    loading,
    error,
    searchList,
    markCompleted,
    deleteTask,
    completedTask,
    totalTask,
    search,
    setSearch,
    openModal,
    setOpenModal,
    addTask
  } = UseTask()

  return (
    <div className='App'>
      <TaskHeader>
        <TaskCounter
          completedTask={completedTask}
          totalTask={totalTask}
        />

        <TaskSearch
          search={search}
          setSearch={setSearch}
        />
      </TaskHeader>
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

      <Modal openModal={openModal}>
        <TaskForm
          setOpenModal={setOpenModal}
          addTask={addTask}
        />
      </Modal>

      <TaskButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  )
}

export default App
