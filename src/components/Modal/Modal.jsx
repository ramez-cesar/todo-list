import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { TaskContext } from '../../contexts/TaskProvider/TaskProvider'
import TaskForm from '../TaskForm/TaskForm'
import './Modal.css'

export default function Modal () {
  const { openModal } = useContext(TaskContext)

  return (
    <>
      {/* Si openModal = true, entonces crea un portal con el componente TaskForm */}
      {openModal && createPortal(
        <div className='modal-container'>
          <TaskForm />
        </div>,
        document.getElementById('modal')
      )}
    </>
  )
}
