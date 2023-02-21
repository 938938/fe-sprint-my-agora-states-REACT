import React from 'react';

const Pagination = ({ numButton, page, setPage }) => {
  const prePage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);
  const selectPage = (index) => setPage(index + 1);

  return (
    <div className='pagination'>
      <button onClick={prePage} disabled={page === 1}>
        &lt;
      </button>
      {Array(numButton)
        .fill()
        .map((_, i) => (
          <button
            key={i}
            onClick={() => selectPage(i)}
            disabled={page === i + 1}
          >
            {i + 1}
          </button>
        ))}
      <button onClick={nextPage} disabled={page === numButton}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
