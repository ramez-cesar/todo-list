import { createPortal } from 'react-dom'
import './Modal.css'

export default function Modal ({ children, openModal }) {
  return (
    <>
      {/* Si openModal = true, crea un portal con el componente que se envie como children */}
      {openModal && createPortal(
        <div className='modal-container'>
          {children}
        </div>,
        document.getElementById('modal')
      )}
    </>
  )
}
