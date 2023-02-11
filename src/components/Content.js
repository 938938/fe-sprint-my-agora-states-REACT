import React from 'react';

const Content = ({ data }) => {
  const { createdAt, title, url, author, answer, avatarUrl } = data;
  console.log(data);
  return (
    <li className='discussion__container'>
      <div className='discussion__avatar--wrapper'>
        <img
          className='discussion__avatar--image'
          src={avatarUrl}
          alt='avatar of kimploo'
        />
        <p className='discussion__avatar--name'>{author}</p>
      </div>
      <div className='discussion__content'>
        <h3 className='discussion__title'>{title}</h3>
        <div className='discussion__information'>
          <p className='discussion__date'>{createdAt}</p>
        </div>
      </div>
      <div className='discussion__answered'>
        <p>☑</p>
      </div>
    </li>
  );
};

export default Content;
