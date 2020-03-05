import React, { useContext } from 'react';
import { ModalContext, LocalizationContext } from '../../contexts';
import { MODAL_TYPES } from '../../constants';
import ContactForm from './components/contactForm';
import MobileMenu from './components/navigation/MobileMenu';

export function useFormModal() {
   const modalAPI = useContext(ModalContext);
   return () =>
      modalAPI.open({
         backdrop: true,
         content: <ContactForm />,
         type: MODAL_TYPES.FORM
      });
}
export function useMenuModal() {
   const modalAPI = useContext(ModalContext);
   return () =>
      modalAPI.open({
         backdrop: true,
         content: <MobileMenu />,
         type: MODAL_TYPES.MENU
      });
}
export function useNavOptions() {
   const { strings } = useContext(LocalizationContext);
   return [
      { text: strings.common.titles.home, id: 'home' },
      { text: strings.common.titles.about, id: 'about' },
      { text: strings.common.titles.skills, id: 'skills' },
      { text: strings.common.titles.myWork, id: 'my-work' },
      { text: strings.common.titles.photos, id: 'phothos' }
   ];
}
