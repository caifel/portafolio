import React from 'react';
import Proptypes from 'prop-types';

function ChooseBox(props) {
   const { checked, className, size, style, type, ...others } = props;
   const isRadio = type === ChooseBox.TYPE.radio;
   return (
      <label className={`box-ctn box-ctn-${size} ${className}`} style={style}>
         <input checked={checked} type={type} {...others} />
         <div>
            {checked &&
               (isRadio ? <span className="icon-circle" /> : <span className="icon-check" />)}
         </div>
      </label>
   );
}

ChooseBox.TYPE = {
   checkbox: 'checkbox',
   radio: 'radio'
};
ChooseBox.SIZE = {
   small: 'small',
   medium: 'medium',
   big: 'big'
};
ChooseBox.propTypes = {
   checked: Proptypes.bool,
   size: Proptypes.oneOf(Object.keys(ChooseBox.SIZE)),
   type: Proptypes.oneOf(Object.keys(ChooseBox.TYPE)).isRequired
};
ChooseBox.defaultProps = {
   checked: false,
   size: ChooseBox.SIZE.medium,
   type: ChooseBox.TYPE.checkbox
};

export default ChooseBox;
