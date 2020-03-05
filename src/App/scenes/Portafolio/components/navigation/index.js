import React, { useContext, useEffect, useRef } from 'react';
import { CallToAction, MenuBarButton } from '../../../../components/buttons';
import { LocalizationContext } from '../../../../contexts';
import { useFormModal, useNavOptions, useMenuModal } from '../../hooks';
import NavigationItem from './NavigationItem';

function Navigation() {
   const menuOptions = useNavOptions();
   const openFormModal = useFormModal();
   const openMenuModal = useMenuModal();
   const { strings } = useContext(LocalizationContext);
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

   return (
      <div
         aria-label={strings.common.main}
         className="navigation-ctn"
         ref={element}
         role="navigation"
      >
         <MenuBarButton onClick={openMenuModal} />
         <ul className="list-ctn">
            {menuOptions.map(({ id, text }) => (
               <NavigationItem key={id} targetId={id} text={text} />
            ))}
         </ul>
         <CallToAction onClick={openFormModal}>
            {strings.common.buttons.contactMe.toUpperCase()}
         </CallToAction>
      </div>
   );
}

export default Navigation;
