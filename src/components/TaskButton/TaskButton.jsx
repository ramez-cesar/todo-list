import React, { useContext } from 'react'
import { IconPlus } from '@tabler/icons-react'
import { TaskContext } from '../../contexts/TaskProvider/TaskProvider'
import './TaskButton.css'

export default function TaskButton () {
  const { openModal, setOpenModal } = useContext(TaskContext)

  const toggleModal = () => {
    // !openModal alterna (hace un toggle) con el valor del estado.
    setOpenModal(!openModal)
  }

  return (
    <button
      className='task-button'
      onClick={toggleModal}
    >
      <IconPlus className='task-addIcon' />
    </button>
  )
}
