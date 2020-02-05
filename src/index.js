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

const App = props => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <div>
      <div>
        {left}
        <button onClick={() => setLeft(left + 1)}>left</button>
        {right}
        <button onClick={() => setRight(right + 1)}>right</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
