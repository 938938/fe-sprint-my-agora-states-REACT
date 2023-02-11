import React, { useEffect, useState } from 'react';
import { getDataAPI } from '../API/getDataAPI';
import Contents from '../components/Contents';
import Question from '../components/Question';

const Main = () => {
  const [list, setList] = useState([]);
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const getData = async () => {
    const data = await getDataAPI();
    console.log(data);
    setList(data);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(userName, title, text);

  return (
    <main>
      <Question
        setUserName={setUserName}
        setTitle={setTitle}
        setText={setText}
      />
      {list.length === 0 ? <span>Loading</span> : <Contents list={list} />}
    </main>
  );
};

export default Main;
