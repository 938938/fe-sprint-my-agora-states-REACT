import React, { useState } from 'react';
import Content from './Content';
import Pagination from './Pagination';

const Contents = ({ list }) => {
  const limit = 8;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const numButton = Math.ceil(list.length / limit);

  return (
    <section className='discussion__wrapper'>
      <ul className='discussions__container'>
        {list.length === 0 ? (
          <p>Loading...</p>
        ) : (
          list
            .slice(offset, offset + limit)
            .map((ele) => <Content key={ele.id} data={ele} />)
        )}
      </ul>
      <Pagination numButton={numButton} page={page} setPage={setPage} />
    </section>
  );
};

export default Contents;
