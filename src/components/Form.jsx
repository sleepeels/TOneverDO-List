import { Fragment, useState, useRef } from "react";
import classes from "./Form.module.css";
import "./Form.module.css";

const Form = (props) => {
  const [todoItem, setTodoItem] = useState("");
  const [itemCounter, setItemCounter] = useState(1);
  const taskInput = useRef(null);

  const contentChangeHandler = (e) => {
    setTodoItem(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = todoItem;
    if (!data) {
      taskInput.current.focus();
      return;
    }
    props.submitHandler({ id: itemCounter, subject: data });
    clearInputs(e);
    taskInput.current.focus();
    setItemCounter((prevCounter) => console.log(prevCounter));
    
  };

  const clearInputs = (e) => {
    setTodoItem("");
    e.target.reset();
  };
  const clearBtnHandler = (e) => {
    props.clearList();
  };

  return (
    <Fragment>
      {/* {todoItem === "" ? <h3>enter todo</h3> : ""} */}
      <form
        onSubmit={(e) => submitHandler(e)}
        className={classes.form}
        autoComplete="off"
      >
        <div className="form-group mb-2"></div>
        <div className=" form-group mb-2">
          <input
            ref={taskInput}
            type="text"
            className={classes.input + " form-control"}
            id="inputTask"
            placeholder="Enter Task..."
            onChange={(e) => {
              contentChangeHandler(e);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Save
        </button>
        <button
          type="button"
          onClick={clearBtnHandler}
          id="clearAll"
          className="btn btn-danger btn-block"
        >
          Clear All
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
