const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ name, exercices }) => {
  return (
    <p>
      {name} {exercices}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercices={part.exercices} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercices, 0);
  return <p>Number of exercices {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercices: 10,
      },
      {
        name: "Using props to pass data",
        exercices: 7,
      },
      {
        name: "State of a component",
        exercices: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
