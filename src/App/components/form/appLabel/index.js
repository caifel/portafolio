import React from 'react';

function AppLabel({ text, isRequired, ...others }) {
   return (
      <div className="app-label-ctn">
         <label {...others}>{text}</label>
         {isRequired && <span>*</span>}
      </div>
   );
}

export default AppLabel;
