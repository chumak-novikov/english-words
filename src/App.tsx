import React from 'react';
import './App.scss';

const App2 = (props: any) => {
  const {
    prop1,
    prop2,
    props3,
    prop4,
    prop5,
    prop6,
    prop7,
    prop8,
    prop9,
    prop10,
  } = props;

  const arr = [
    { id: 1, name: 'App', template: 4, teafwfwaf: 3, dwadadw: 9 },
    { id: 1 },

    { id: 1 },
  ];

  console.log(
    arr,
    prop1,
    prop2,
    props3,
    prop4,
    prop5,
    prop6,
    prop7,
    prop8,
    prop9,
    prop10
  );

  return <div />;
};

const App = () => (
  <div
    className="App"
    onChange={() => {}}
  >
    <App2 />
  </div>
);

export default App;
