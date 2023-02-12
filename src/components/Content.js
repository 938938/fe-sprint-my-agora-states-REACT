import React, { useState } from 'react';

const Content = ({ data }) => {
  const { createdAt, title, url, author, answer, avatarUrl } = data;
  const [on, setOn] = useState(false);
  const onClick = () => {
    setOn((on) => !on);
  };
  return (
    <li className='discussion__container' onClick={onClick}>
      <div className='discussion__avatar--wrapper'>
        <img
          className='discussion__avatar--image'
          src={avatarUrl}
          alt='avatar of user'
        />
        <p className='discussion__avatar--name'>{author}</p>
      </div>
      <div className='discussion__content'>
        <h3 className='discussion__title'>{title}</h3>
        {on && (
          <div className='discussion__information'>
            <p className='discussion__date'>{createdAt}</p>
          </div>
        )}
      </div>
      <div className='discussion__answered'>
        <p>☑</p>
      </div>
    </li>
  );
};

export default Content;
