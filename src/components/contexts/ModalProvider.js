import React, { createContext, useState, useContext, useEffect} from 'react'

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

  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) { // 27 是 ESC 鍵的鍵碼
        closeModal();
      }
    };

    // 添加鍵盤事件監聽器
    window.addEventListener('keydown', handleKeyDown);

    // 清理函數
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const { component: ModalComponent, props: modalProps } = modalConfig
  return(
    <ModalContext.Provider value={{ modalConfig, openModal, closeModal}} >
      {children}
    {ModalComponent && <ModalComponent {...modalProps} />}
    </ModalContext.Provider>
  )
};
