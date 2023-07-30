import React from "react";

const Content = ({ name1, name2, name3, exercise1, exercise2, exercise3 }) => {
  return (
    <div>
      <part>
        <h2>{name1}</h2>
        <p>Exercises: {exercise1}</p>
      </part>
      <part>
        <h2>{name2}</h2>
        <p>Exercises: {exercise2}</p>
      </part>
      <part>
        <h2>{name3}</h2>
        <p>Exercises: {exercise3}</p>
      </part>
    </div>
  );
};
const Total = ({ exercise1, exercise2, exercise3 }) => {
  const totalnumber = +exercise1 + +exercise2 + +exercise3;

  return (
    <div>
      <h2>Total</h2>
      <p>Total number of exercise: {totalnumber}</p>
    </div>
  );
};

const App = () => {
  const name = "Half Stack application development";
  const name1 = "Fundamentals of React";
  const name2 = "Using props to pass data";
  const name3 = "State of a component";
  const exercise1 = "10";
  const exercise2 = "7";
  const exercise3 = "14";

  return (
    <div>
      <header>{name}</header>
      <Content
        name1={name1}
        name2={name2}
        name3={name3}
        exercise1={exercise1}
        exercise2={exercise2}
        exercise3={exercise3}
      />
      <Total
        exercise1={exercise1}
        exercise2={exercise2}
        exercise3={exercise3}
      />
    </div>
  );
};

export default App;
