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

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = props => {
  const [counter, setCounter] = useState(0);
  // double arrow functoin = currying(カリー化)
  const setToValue = value => () => setCounter(value);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={setToValue(counter + 1)} text={'plus'} />
      <Button onClick={setToValue(counter - 1)} text={'minus'} />
      <Button onClick={setToValue(0)} text={'zero'} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
