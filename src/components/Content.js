import React, { useState } from 'react';
import { CgCheckR } from 'react-icons/cg';

const Content = ({ data }) => {
  const { createdAt, title, url, author, answer, avatarUrl, text } = data;
  const [on, setOn] = useState(false);
  const onClick = () => {
    setOn((on) => !on);
  };
  return (
    <li className='discussion__container' onClick={onClick}>
      <div className='discussion__avatar--wrapper'>
        <img
          className='discussion__avatar--image'
          src={
            avatarUrl
              ? avatarUrl
              : 'https://cdn.pixabay.com/photo/2016/10/08/18/35/help-1724292_1280.png'
          }
          alt='avatar of user'
        />
        <p className='discussion__avatar--name'>{author}</p>
      </div>
      <div className='discussion__content'>
        <h3 className='discussion__title'>{title}</h3>
        {on && (
          <div className='discussion__information'>
            <p>{text ? text : title}</p>
            {url ? <a href={url}>링크로 이동하기</a> : ''}
            <p className='discussion__date'>{createdAt}</p>
          </div>
        )}
      </div>
      <div className='discussion__answered'>
        {answer ? <CgCheckR /> : <></>}
      </div>
    </li>
  );
};

export default Content;
