import React from 'react';
import { storiesOf } from '@storybook/react';
import ChooseBox from '../src/App/components/form/fields/ChooseBox';

const fn = e => console.log(e.target.checked, e.target.value);

storiesOf('ChooseBox', module).add('ChooseBox', () => (
   <div>
      <h1>Content</h1>
      <fieldset disabled>
         <ChooseBox checked={false} onChange={fn} />
         <ChooseBox checked={true} onChange={fn} />
         <ChooseBox
            value="28"
            name="option"
            checked={false}
            onChange={fn}
            style={{ marginLeft: 10 }}
            type={ChooseBox.TYPE.radio}
         />
      </fieldset>
      <form
         onSubmit={e => {
            e.preventDefault();
            console.log(e);
         }}
      >
         <fieldset>
            <ChooseBox name="list" onChange={fn} type={ChooseBox.TYPE.checkbox} />
            <ChooseBox
               name="list"
               checked={true}
               onChange={fn}
               type={ChooseBox.TYPE.checkbox}
               style={{ marginLeft: 10 }}
            />
            <ChooseBox
               value="14"
               name="option"
               checked={true}
               onChange={fn}
               style={{ marginLeft: 10 }}
               type={ChooseBox.TYPE.radio}
            />
            <ChooseBox
               value="16"
               name="option"
               checked={true}
               onChange={fn}
               size={ChooseBox.SIZE.big}
               style={{ marginLeft: 10 }}
               type={ChooseBox.TYPE.radio}
            />
            <ChooseBox
               value="18"
               name="option"
               checked={true}
               onChange={fn}
               size={ChooseBox.SIZE.small}
               style={{ marginLeft: 10 }}
               type={ChooseBox.TYPE.radio}
            />
            <ChooseBox
               value="17"
               name="option"
               checked={true}
               onChange={fn}
               style={{ marginLeft: 10 }}
               type={ChooseBox.TYPE.radio}
            />
            <ChooseBox
               value="18"
               name="list"
               checked={true}
               onChange={fn}
               size={ChooseBox.SIZE.big}
               style={{ marginLeft: 10 }}
               type={ChooseBox.TYPE.checkbox}
            />
            <ChooseBox
               value="19"
               name="list"
               checked={true}
               onChange={fn}
               style={{ marginLeft: 10 }}
               type={ChooseBox.TYPE.checkbox}
            />
            <ChooseBox
               value="20"
               name="list"
               checked={true}
               onChange={fn}
               size={ChooseBox.SIZE.small}
               style={{ marginLeft: 10 }}
               type={ChooseBox.TYPE.checkbox}
            />
         </fieldset>
         <button>Save</button>
      </form>
   </div>
));
