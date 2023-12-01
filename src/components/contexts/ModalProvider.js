import React, { createContext, useState, useContext} from 'react'

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const  ModalProvider = ({ children }) => {
  // const [ activeModal, setActiveModal ] = useState(null);
  const [ modalConfig, setModalConfig ] = useState({ component: null, props:{} }) 
  const openModal = (config) => {
    setModalConfig(config)
  };
  const closeModal = () => {
    setModalConfig({ component: null, props:{} })
  };
  const { component: ModalComponent, props: modalProps } = modalConfig
  return(
    <ModalContext.Provider value={{ modalConfig, openModal, closeModal}} >
      {children}
    {ModalComponent && <ModalComponent {...modalProps} />}
    </ModalContext.Provider>
  )
};
