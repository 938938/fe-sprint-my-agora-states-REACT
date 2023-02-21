import React, { useState } from 'react';

const Question = ({ setNewData }) => {
  const [toggle, setToggle] = useState(false);

  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

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
    setNewData({
      author: userName,
      title,
      text,
      createdAt: new Date().toLocaleDateString(),
    });
    onToggle();
  };

  return (
    <section className='form__container'>
      <button className='addQ' onClick={onToggle}>
        Add Question
      </button>
      {toggle && (
        <>
          <div className='modal-bg' onClick={onToggle} />
          <div className='modal'>
            <form action='' method='get' className='form' onSubmit={onSubmit}>
              <button className='close' type='button' onClick={onToggle}>
                X
              </button>
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
        </>
      )}
    </section>
  );
};

export default Question;
