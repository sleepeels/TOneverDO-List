import { Fragment, useState, useRef } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const [todoItem, setTodoItem] = useState("");
  const taskInput = useRef(null);

  const contentChangeHandler = (e) => {
    setTodoItem(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = todoItem;
    if (!data) return;
    props.submitHandler({ subject: data });
    clearInputs(e);
    taskInput.current.focus();
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
      {todoItem === "" ? <h3>enter todo</h3> : ""}
      <form
        onSubmit={(e) => submitHandler(e)}
        className={classes.form}
        autoComplete="off"
      >
        <div className="form-group mb-2">
          <label htmlFor="staticEmail2" className="sr-only">
            Enter Task
          </label>
        </div>
        <div className="form-group mb-2">
          <input
            ref={taskInput}
            type="text"
            className="form-control"
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
