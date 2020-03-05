import React, { useState } from 'react';
import { ModalContext } from '../../contexts';
import Modal from '../Modal';

export const ModalProvider = ({ children }) => {
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
      <ModalContext.Provider
         value={{ isOpen: Boolean(content), open: handleOpenModal, close: handleCloseModal }}
      >
         {children}
         {content && <Modal children={content} backdrop={backdrop} type={type} />}
      </ModalContext.Provider>
   );
};

export default ModalProvider;
