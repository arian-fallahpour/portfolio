import { createContext, useState } from "react";

export const ModalContext = createContext({
  isVisible: false,
  content: null,
  showModal: (content) => {},
  hideModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState(null);

  const showModalHandler = (content) => {
    document.body.style.overflow = "hidden";
    setContent(content);
    setIsVisible(true);
  };

  const hideModalHandler = () => {
    document.body.style.overflow = "auto";
    setIsVisible(false);
  };

  const loginContext = {
    isVisible,
    content,
    showModal: showModalHandler,
    hideModal: hideModalHandler,
  };

  return <ModalContext.Provider value={loginContext}>{children}</ModalContext.Provider>;
};
