import React, { createContext, useState, useContext} from 'react'

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const  ModalProvider = ({ children }) => {
  const [ activeModal, setActiveModal ] = useState(null);
  const openModal = (modalId) => {
    setActiveModal(modalId)
  };
  const closeModal = () => {
    setActiveModal(null)
  };
  return(
    <ModalContext.Provider value={{ activeModal, openModal, closeModal}} >
      {children}
    </ModalContext.Provider>
  )
};

  

  



