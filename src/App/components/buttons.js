import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalContext, LocalizationContext } from '../contexts';

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
   const { strings } = useContext(LocalizationContext);
   return (
      <button
         aria-label={strings.form.buttons.menu}
         className="menu-bar-btn icon-bars"
         {...props}
      />
   );
}
function MenuCloseButton(props) {
   const { strings } = useContext(LocalizationContext);
   return (
      <button
         aria-label={strings.form.buttons.close}
         className="menu-close-btn icon-times"
         {...props}
      />
   );
}
function ModalCloseButton() {
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
