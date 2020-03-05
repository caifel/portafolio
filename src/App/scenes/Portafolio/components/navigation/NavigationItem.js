import React, { useContext } from 'react';
import { ModalContext } from '../../../../contexts';

function NavigationItem(props) {
   const modalAPI = useContext(ModalContext);
   const { targetId, text, ...others } = props;
   const handleLinkClick = e => {
      e.preventDefault();
      window.scrollTo({
         top:
            document.getElementById(targetId).offsetTop -
            document.querySelector('.navigation-ctn').offsetHeight,
         behavior: 'smooth'
      });
      modalAPI.close();
   };

   return (
      <li className="link-ctn" {...others}>
         <a href={`#${targetId}`} onClick={handleLinkClick}>
            {text}
         </a>
      </li>
   );
}

export default NavigationItem;
