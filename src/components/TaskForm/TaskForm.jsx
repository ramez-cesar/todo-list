import React, { useState } from 'react'
import './TaskForm.css'

export default function TaskForm ({ setOpenModal, addTask }) {
  const [newTask, setNewTask] = useState('')

  const addNewTask = (e) => {
    e.preventDefault()

    addTask(newTask)
    setOpenModal(false)
  }

  // Función que obtiene el valor de textarea y setea el estado con éste valor.
  const getValueTextarea = (e) => {
    const textNewTask = e.target.value
    setNewTask(textNewTask)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <form
      className='form-modal'
      onSubmit={addNewTask}
    >
      <textarea
        className='form-textArea'
        value={newTask}
        onChange={getValueTextarea}
        placeholder='Agrega tu nueva tarea...'
        required
      />
      <div className='form-buttonsContainer'>
        <button onClick={closeModal}>Cancelar</button>
        <button type='submit'>Añadir</button>
      </div>

    </form>
  )
}
