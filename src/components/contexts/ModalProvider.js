import React, { createContext, useState, useContext, useEffect} from 'react'
// 建立狀態容器
const ModalContext = createContext();
// 建立跨元件調用屬性的hook
export const useModal = () => useContext(ModalContext);
// 封裝負責管理modal的開啟與關閉邏輯
export const  ModalProvider = ({ children }) => {

  // 渲染邏輯
  const [ modalConfig, setModalConfig ] = useState({ component: null, props:{} }) 
  const openModal = (config) => {
    setModalConfig(config)
  };
  const closeModal = () => {
    setModalConfig({ component: null, props:{} })
  };

  // 判斷是否觸發屬性變更來重新註冊事件監聽
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };

    // 加入事件監聽器
    window.addEventListener('keydown', handleKeyDown);

    // 移除事件監聽器
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);
  // 解構屬性值方便調用程式碼
  const { component: ModalComponent, props: modalProps } = modalConfig
  return(
    <ModalContext.Provider value={{ modalConfig, openModal, closeModal}} >
      {children}
      {ModalComponent && <ModalComponent {...modalProps} />}
    </ModalContext.Provider>
  )
};
