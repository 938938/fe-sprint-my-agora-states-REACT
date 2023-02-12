import React from 'react';
import Content from './Content';

const Contents = ({ list }) => {
  return (
    <section className='discussion__wrapper'>
      <ul className='discussions__container'>
        {list.length === 0 ? (
          <p>Loading...</p>
        ) : (
          list.map((ele) => (
            <Content key={ele.id} data={ele} />
          ))
        )}
      </ul>
    </section>
  );
};

export default Contents;
