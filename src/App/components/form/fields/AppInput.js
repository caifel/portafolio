import React from 'react';

function AppInput({ className, ...others }) {
   return <input className={`app-input ${className}`} type="text" {...others} />;
}

export default AppInput;
