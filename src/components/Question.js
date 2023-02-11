import React, { useState } from 'react';

const Question = ({ setUserName, setTitle, setText }) => {
  const [toggle, setToggle] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setUserName(value);
    } else if (name === 'title') {
      setTitle(value);
    } else {
      setText(value);
    }
  };

  const onToggle = () => {
    setToggle((toggle) => !toggle);
  };

  const onSubmit = () => {
    console.log('submit');
    onToggle();
  };

  return (
    <section className='form__container'>
      <button className='addQ' onClick={onToggle}>
        Add Question
      </button>
      {toggle && (
        <div className='modal'>
          <form action='' method='get' className='form' onSubmit={onSubmit}>
            <button className='close' type='button' onClick={onToggle}>
              X
            </button>
            {/* <div className='close' onClick={onToggle}>
              <ion-icon name='close-outline'></ion-icon>
            </div> */}
            <div className='form__input--wrapper'>
              <div className='form__input--name'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  required
                  placeholder='Name'
                  className='input'
                  autoComplete='off'
                  onChange={onChange}
                />
              </div>
              <div className='form__input--title'>
                <input
                  type='text'
                  name='title'
                  id='title'
                  required
                  placeholder='Title'
                  className='input'
                  autoComplete='off'
                  onChange={onChange}
                />
              </div>
              <div className='form__textbox'>
                <textarea
                  id='story'
                  name='story'
                  placeholder='How to...'
                  required
                  className='input textbox'
                  autoComplete='off'
                  onChange={onChange}
                ></textarea>
              </div>
            </div>
            <button className='form__submit' type='submit'>
              Submit
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Question;
