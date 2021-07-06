import { Fragment } from "react";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  const item = props.item;

  return (
    <Fragment>
      <div className={classes.defaultStyle + " card"}>
        <div className="card-body">
          <h5 className="card-title">Task #</h5>
          <h6 className="card-subtitle mb-2 text-muted">{item.subject}</h6>

          <button type="submit" className="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ListItem;
