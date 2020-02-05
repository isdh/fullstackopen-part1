import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

/**
 * 状態変更関数setCounterが呼び出されると、
 * Reactはコンポーネントを再レンダリングする。
 * つまり、コンポーネント関数の関数本体が再実行されます。
 * @param {*} props
 */
const App = props => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>reset</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
