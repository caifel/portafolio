import React, { Fragment, useContext } from 'react';
import { MenuCloseButton } from '../../../../components/buttons';
import { ModalContext } from '../../../../contexts';
import { useNavOptions } from '../../hooks';
import NavigationItem from './NavigationItem';

function MobileMenu() {
   const menuOptions = useNavOptions();
   const modalAPI = useContext(ModalContext);
   return (
      <Fragment>
         <div className="mobile-menu-header">
            <MenuCloseButton onClick={modalAPI.close} />
         </div>
         <ul className="mobile-menu-content">
            {menuOptions.map(({ id, text }) => (
               <NavigationItem key={id} targetId={id} text={text} />
            ))}
         </ul>
      </Fragment>
   );
}

export default MobileMenu;
