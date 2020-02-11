import React, { Fragment, useContext } from 'react';
import Proptypes from 'prop-types';
import { FormButton, ModalCloseButton } from './buttons';
import AppLabel from './form/AppLabel';
import FieldGroup from './form/FieldGroup';
import AppInput from './form/fields/AppInput';
import AppTextarea from './form/fields/AppTextarea';
import AppDateInput from './form/fields/AppDateInput';
import ModalContext from '../contexts/ModalContext';

const ContactForm = props => {
   const modalAPI = useContext(ModalContext);
   return (
      <Fragment>
         <div className="contact-form-header">
            <h2>CONTACT FORM</h2>
            <ModalCloseButton />
         </div>
         <form className="contact-form-body">
            <FieldGroup
               labelNode={<AppLabel htmlFor="name" text="Name" isRequired />}
               fieldNode={<AppInput id="name" type="text" />}
            />
            <FieldGroup
               labelNode={<AppLabel htmlFor="email" text="Email" isRequired />}
               fieldNode={<AppInput id="email" type="email" />}
            />
            <FieldGroup
               labelNode={<AppLabel htmlFor="message" text="Message" isRequired />}
               fieldNode={<AppTextarea id="message" type="text" />}
            />
            <FieldGroup
               labelNode={<AppLabel htmlFor="date" text="Date" isRequired />}
               fieldNode={<AppDateInput id="date" />}
            />
         </form>
         <div className="contact-form-footer">
            <FormButton disabled text="Send" type="fill" />
            <FormButton text="Cancel" onClick={modalAPI.close} />
         </div>
      </Fragment>
   );
};

ContactForm.propTypes = {};

export default ContactForm;
