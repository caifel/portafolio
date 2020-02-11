import React from 'react';
import { string } from 'postcss-selector-parser';
import Proptypes from 'prop-types';

function AboutMeCard({ answerText, style, questionText }) {
   return (
      <div className="about-me-card" style={style}>
         <h3 className="question">{questionText}</h3>
         <div className="divider" />
         <span className="answer">{answerText}</span>
      </div>
   );
}

AboutMeCard.propTypes = {
   answerText: Proptypes.string.isRequired,
   questionText: Proptypes.string.isRequired
};

export default AboutMeCard;
