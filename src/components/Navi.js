import React from 'react';
import { IoIosExit } from 'react-icons/io';

const Navi = () => {
  return (
    <nav>
      <button className='linkbtn'>
        <IoIosExit />
      </button>
      <ul className='links'>
        <li>
          <a href='https://urclass.codestates.com/'>CodeStates</a>
        </li>
        <li>
          <a href='https://help-urclass-codestates.zendesk.com/hc/ko'>
            Help Center
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navi;
