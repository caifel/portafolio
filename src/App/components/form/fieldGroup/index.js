import React from 'react';
import Proptypes from 'prop-types';
import { POSITION } from '../../../constants';

const { BOTTOM, LEFF, RIGHT, TOP } = POSITION;

function FieldGroup({ className, labelNode, labelPosition, fieldNode }) {
   return (
      <div className={`field-group-${labelPosition} ${className}`}>
         {labelNode}
         {fieldNode}
      </div>
   );
}

FieldGroup.propTypes = {
   labelPosition: Proptypes.oneOf([BOTTOM, LEFF, RIGHT, TOP])
};

FieldGroup.defaultProps = {
   className: '',
   labelPosition: TOP
};

export default FieldGroup;
