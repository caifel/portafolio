import React, { useState } from 'react';
import { getUserLocale } from 'get-user-locale';
import strings from '../../localization/strings';
import { LocalizationContext } from '../../contexts';

function getLocale() {
   const locale = getUserLocale();
   const splitedLocale = locale.split('-');
   return splitedLocale[0];
}

function LocalizationProvider(props) {
   const [locale, setLocale] = useState(getLocale());
   strings.setLanguage(locale);
   return (
      <LocalizationContext.Provider
         children={props.children}
         value={{
            locale,
            strings,
            setLocale
         }}
      />
   );
}

export default LocalizationProvider;
