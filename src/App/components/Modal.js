import React, { useContext } from 'react';
import Proptypes from 'prop-types';
import { ModalContext, LocalizationContext } from '../contexts';
import { MODAL_TYPES } from '../constants';

const { ALERT, COMBO, FORM, MENU, SPEED_BUMP } = MODAL_TYPES;

function Modal(props) {
   const { strings } = useContext(LocalizationContext);
   const modalAPI = useContext(ModalContext);
   const { backdrop, children, type } = props;

   return (
      <div className={`modal-ctn modal-type-${type || SPEED_BUMP}`} role="dialog">
         {backdrop && (
            <button
               aria-label={strings.form.buttons.close}
               className="modal-backdrop-btn"
               onClick={modalAPI.close}
            />
         )}
         <div className="modal-content-ctn">{children}</div>
      </div>
   );
}

Modal.defaultTypes = {
   backdrop: false
};
Modal.propTypes = {
   children: Proptypes.node.isRequired,
   backdrop: Proptypes.bool,
   type: Proptypes.oneOf([ALERT, COMBO, FORM, MENU, SPEED_BUMP])
};

export default Modal;
