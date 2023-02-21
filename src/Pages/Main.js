import React, { useEffect, useState } from 'react';
import { getDataAPI } from '../API/getDataAPI';
import Contents from '../components/Contents';
import Question from '../components/Question';
import Search from '../components/Search';
import { GrPowerReset } from 'react-icons/gr';

const Main = () => {
  const [list, setList] = useState([]);
  const [newData, setNewData] = useState({});
  const [reset, setReset] = useState(false);

  const getData = async () => {
    const data = await getDataAPI();
    setList(data);
  };

  useEffect(() => {
    getData();
  }, [reset]);

  useEffect(() => {
    setList((prev) => [newData, ...prev]);
  }, [newData]);

  const onReset = () => {
    setReset(!reset);
  };

  return (
    <main>
      <Search setList={setList} />
      <GrPowerReset onClick={onReset} />
      <Question setNewData={setNewData} />
      {list.length === 0 ? <span>Loading</span> : <Contents list={list} />}
    </main>
  );
};

export default Main;
