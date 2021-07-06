import { useState } from "react";
import "./App.css";
import { Fragment } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";

let todosl = [];

function App() {
  const [todos, setTodos] = useState(todosl);

  const submitHandler = (data) => {
    todos.push(data);
    const ll = [...todos];
    setTodos(ll);
  };

  const clearList = () => {
    setTodos([]);
  };

  return (
    <Fragment>
      <Header />
      <Form
        count={todos.length}
        submitHandler={submitHandler}
        clearList={clearList}
      />
      <List list={todos} />
    </Fragment>
  );
}

export default App;

// <div className="App">
//   <Form
//     submitHandler={showFormInputs}
//     count={listCount}
//     clearTodos={clearTodos}
//   />
//   <List
//     // subject={sub}
//     // content={con}
//     list={todol}
//     count={listCount}
//     subCount={subCount}
//   />
// </div>

// const [listCount, setListCount] = useState(todos.length);

// function showFormInputs(data) {
//   todos.push(data);
//   const ll = [...todos];
//   setTodol(ll);
//   const c = listCount + 1;
//   setListCount(c);
// }
// function subCount(count) {
//   setListCount(count);
// }
// function clearTodos() {
//   console.log("in clearTodos from App comp.");
//   setTodol([]);
// }
