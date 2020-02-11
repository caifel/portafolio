import React, { useState } from 'react';
import Modal from '../components/Modal';

const ModalContext = React.createContext({
   open: () => {}
});

export const ModalProvider = ModalContext.Provider;
export const ModalConsumer = ModalContext.Consumer;
export const ModalWrap = ({ children }) => {
   const [backdrop, setBackdrop] = useState(false);
   const [content, setContent] = useState(null);
   const [type, setType] = useState('');

   const handleOpenModal = ({ backdrop, content, type }) => {
      setBackdrop(backdrop);
      setContent(content);
      setType(type);
      document.body.setAttribute('style', 'overflow: hidden;');
   };
   const handleCloseModal = () => {
      setBackdrop(false);
      setContent(null);
      setType('');
      document.body.removeAttribute('style', 'overflow: hidden;');
   };

   return (
      <ModalProvider
         value={{ isOpen: Boolean(content), open: handleOpenModal, close: handleCloseModal }}
      >
         {children}
         {content && <Modal children={content} backdrop={backdrop} type={type} />}
      </ModalProvider>
   );
};

export default ModalContext;
