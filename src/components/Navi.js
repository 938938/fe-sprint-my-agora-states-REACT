import React from 'react';

const Navi = () => {
  return (
    <nav>
      <button className='linkbtn'>
        <ion-icon name='menu-outline'></ion-icon>
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
