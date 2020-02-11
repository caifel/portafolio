import React, { Fragment, useContext, useEffect, useRef } from 'react';
import { CallToAction, MenuBarButton, MenuCloseButton } from './buttons';
import ContactForm from './ContactForm';
import ModalContext from '../contexts/ModalContext';
import { MODAL_TYPES } from '../constants';

const menuOptions = [
   { text: 'Home', id: 'home' },
   { text: 'About', id: 'about' },
   { text: 'Skills', id: 'skills' },
   { text: 'Work', id: 'my-work' },
   { text: 'Photos', id: 'phothos' }
];

function Navigation() {
   const modalAPI = useContext(ModalContext);
   const element = useRef();

   useEffect(() => {
      const onScroll = () => {
         const links = document.querySelectorAll('ul.list-ctn .link-ctn a');
         const selectedEl = document.querySelector(`.list-ctn a.selected`);
         const lastLink = links[links.length - 1];
         for (let i = 0; i < links.length; i += 1) {
            const link = links[i];
            const target = document.getElementById(link.href.split('#')[1]);
            const targetTopPosition = target.offsetTop - element.current.offsetHeight;
            const targetBottomPosition = targetTopPosition + target.offsetHeight;
            // Is it at the bottom?
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
               selectedEl && selectedEl.classList.remove('selected');
               lastLink && lastLink.classList.add('selected');
               break;
            } else if (
               // Did we enter in a new section?
               window.scrollY >= targetTopPosition &&
               window.scrollY < targetBottomPosition &&
               link !== selectedEl
            ) {
               selectedEl && selectedEl.classList.remove('selected');
               link.classList.add('selected');
               break;
            }
         }
      };
      onScroll();
      window.onbeforeunload = () => window.scrollTo(0, 0);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
         window.removeEventListener('scroll', onScroll);
      };
   }, []);

   const openMenuModal = () => {
      modalAPI.open({
         backdrop: true,
         content: <MobileMenu />,
         type: MODAL_TYPES.MENU
      });
   };

   const openFormModal = () => {
      modalAPI.open({
         backdrop: true,
         content: <ContactForm />,
         type: MODAL_TYPES.FORM
      });
   };

   return (
      <div className="navigation-ctn" ref={element}>
         <MenuBarButton onClick={openMenuModal} />
         <ul className="list-ctn">
            {menuOptions.map(({ id, text }) => (
               <NavigationItem key={id} targetId={id} text={text} />
            ))}
         </ul>
         <CallToAction onClick={openFormModal}>CONTACT</CallToAction>
      </div>
   );
}

function MobileMenu() {
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

export default Navigation;
