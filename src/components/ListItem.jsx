import { Fragment } from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  const item = props.item;

  const removeItem = (e) => {
    console.log(e.target.parentNode);
    e.target.parentNode.parentNode.remove();
  };

  return (
    <Fragment>
      <div className={classes.defaultStyle + " card"}>
        <div className="card-body">
          <h5 className="card-title">Task #{item.id}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{item.subject}</h6>

          <button
            onClick={removeItem}
            type="submit"
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ListItem;
