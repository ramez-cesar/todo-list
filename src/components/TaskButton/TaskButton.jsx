import React from 'react'
import { IconPlus } from '@tabler/icons-react'
import './TaskButton.css'

export default function TaskButton ({ openModal, setOpenModal }) {
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
