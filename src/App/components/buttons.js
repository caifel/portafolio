import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ModalContext from '../contexts/ModalContext';

function CallToAction({ children, ...others }) {
   return (
      <button {...others} className="call-to-action">
         {children}
      </button>
   );
}

CallToAction.propTypes = {
   children: PropTypes.node.isRequired
};

function MenuBarButton(props) {
   return <button className="menu-bar-btn icon-bars" {...props} />;
}
function MenuCloseButton(props) {
   return <button className="menu-close-btn icon-times" {...props} />;
}
function ModalCloseButton(props) {
   const modalAPI = useContext(ModalContext);
   return <button className="modal-close-btn icon-times" onClick={modalAPI.close} />;
}
function FormButton({ text, type, ...others }) {
   return (
      <button className={`form-btn ${type === 'fill' ? 'fill-btn' : ''}`} {...others}>
         {text}
      </button>
   );
}

export { CallToAction, FormButton, ModalCloseButton, MenuBarButton, MenuCloseButton };
