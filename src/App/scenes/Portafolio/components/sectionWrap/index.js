import React from 'react';
import PropTypes from 'prop-types';

function AppSection(props) {
   const { content, id, title, ...others } = props;
   return (
      <section {...others} id={id} className="app-section">
         <h2>{title}</h2>
         <div className="divider" />
         {content}
      </section>
   );
}

AppSection.propTypes = {
   content: PropTypes.node.isRequired,
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired
};

export default AppSection;
