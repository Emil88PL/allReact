import React, { useEffect } from 'react';

const Modal = ({modalCOntent,closeModal}) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal()
    }, 2000)
  })
  return <div className="modal">
    <p>{modalCOntent}</p>
  </div>;
};

export default Modal;
