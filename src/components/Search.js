import React, { useRef } from 'react';
import { getIdAPI } from '../API/getIdAPI';

const Search = ({ setList }) => {
  const inputRef = useRef();
  const getIdData = async (id) => {
    const data = await getIdAPI({ id });
    console.log([data]);
    setList([data]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = inputRef.current;
    console.log(value);
    getIdData(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input ref={inputRef} type='text' placeholder='input search id' />
    </form>
  );
};

export default Search;
