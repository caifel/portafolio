import React, { Fragment, useContext } from 'react';
import { FormButton, ModalCloseButton } from '../../../../components/buttons';
import AppLabel from '../../../../components/form/appLabel';
import FieldGroup from '../../../../components/form/fieldGroup';
import AppInput from '../../../../components/form/fields/AppInput';
import AppTextarea from '../../../../components/form/fields/AppTextarea';
import AppDateInput from '../../../../components/form/fields/AppDateInput';
import { ModalContext, LocalizationContext } from '../../../../contexts';

const ContactForm = props => {
   const { strings } = useContext(LocalizationContext);
   const modalAPI = useContext(ModalContext);
   return (
      <Fragment>
         <div className="contact-form-header">
            <h2>{strings.form.titles.contactForm.toUpperCase()}</h2>
            <ModalCloseButton />
         </div>
         <form className="contact-form-body">
            <FieldGroup
               labelNode={<AppLabel htmlFor="name" text={strings.form.labels.name} isRequired />}
               fieldNode={<AppInput id="name" type="text" />}
            />
            <FieldGroup
               labelNode={<AppLabel htmlFor="email" text={strings.form.labels.email} isRequired />}
               fieldNode={<AppInput id="email" type="email" />}
            />
            <FieldGroup
               labelNode={
                  <AppLabel htmlFor="message" text={strings.form.labels.message} isRequired />
               }
               fieldNode={<AppTextarea id="message" type="text" />}
            />
            <FieldGroup
               labelNode={<AppLabel htmlFor="date" text={strings.form.labels.date} isRequired />}
               fieldNode={<AppDateInput id="date" />}
            />
         </form>
         <div className="contact-form-footer">
            <FormButton disabled text={strings.form.buttons.send} type="fill" />
            <FormButton text={strings.form.buttons.cancel} onClick={modalAPI.close} />
         </div>
      </Fragment>
   );
};

ContactForm.propTypes = {};

export default ContactForm;
