import React, { useState, useEffect } from 'react';
import moment from 'moment';
import AppInput from './AppInput';
import AppLabel from '../AppLabel';
import FieldGroup from '../FieldGroup';

const isNumber = value => !isNaN(Number(value));
function getMaxDay(month, year) {
   switch (Number(month)) {
      case 2:
         return (year % 4 === 0 && year % 100) || year % 400 === 0 ? 29 : 28;
      case 9:
      case 4:
      case 6:
      case 11:
         return 30;
      default:
         return 31;
   }
}

function AppDateInput({ date, maxDate, onChange }) {
   const [month, setMonth] = useState('');
   const [day, setDay] = useState('');
   const [year, setYear] = useState('');

   const updateDay = value => {
      const maxValue = getMaxDay(month || 0, year || 0);
      const isInRange = value > 0 && value <= maxValue;
      if ((isNumber(value) && isInRange) || !value) {
         setDay(value);
      } else if (value > maxValue) {
         setDay(maxValue);
      }
   };

   const handleMonthChange = e => {
      const value = e.target.value;
      const maxValue = 12;
      const isInRange = value > 0 && value <= 12;
      if ((isNumber(value) && isInRange) || !value) {
         setMonth(value);
      } else if (value > maxValue) {
         setMonth(maxValue);
      }
   };
   const handleDayChange = e => updateDay(e.target.value);
   const handleYearChange = e => {
      const value = e.target.value;
      const maxValue = Number(moment(maxDate).format('Y'));
      const isInRange = value > 0 && value <= maxValue;
      if ((isNumber(value) && isInRange) || !value) {
         setYear(value);
      } else if (value > maxValue) {
         setYear(maxValue);
      }
   };

   useEffect(() => {
      updateDay(day);
   }, [month, year]);

   return (
      <div className="date-input-ctn">
         <FieldGroup
            labelNode={<AppLabel htmlFor="month" text="Month" />}
            fieldNode={
               <AppInput
                  className="month-input"
                  id="month"
                  name="month"
                  onChange={handleMonthChange}
                  type="number"
                  value={month}
               />
            }
         />
         <FieldGroup
            labelNode={<AppLabel htmlFor="day" text="Day" />}
            fieldNode={
               <AppInput
                  className="day-input"
                  id="day"
                  name="day"
                  onChange={handleDayChange}
                  type="number"
                  value={day}
               />
            }
         />
         <FieldGroup
            labelNode={<AppLabel htmlFor="year" text="Year" />}
            fieldNode={
               <AppInput
                  className="year-input"
                  id="year"
                  name="year"
                  onChange={handleYearChange}
                  type="number"
                  value={year}
               />
            }
         />
      </div>
   );
}

AppDateInput.defaultProps = {
   minDate: new Date('1900-01-01'),
   maxDate: new Date()
};

export default AppDateInput;
