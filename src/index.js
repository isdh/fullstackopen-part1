import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const Display = ({ counter }) => {
//   return <div>{counter}</div>;
// };

// const Button = props => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };

const History = props => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons.</div>;
  }

  return <div>button press History: {props.allClicks.join(' ')}</div>;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = props => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  };

  const handleReset = () => {
    setRight(0);
    setLeft(0);
    setAll([]);
  };

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text="left" />
        <Button onClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
        <Button onClick={handleReset} text="allReset" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
