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

const App = props => {
  const [counter, setCounter] = useState(0);
  // double arrow functoin = currying(カリー化)
  const setToValue = value => () => setCounter(value);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={setToValue(counter + 1)}>plus</button>
      <button onClick={setToValue(0)}>reset</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
