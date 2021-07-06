import { Fragment } from "react";
import classes from "./List.module.css";
import ListItem from "./ListItem";

const List = (props) => {
  const list = props.list;

  return (
    <Fragment>
      {list.length === 0 ? (
        <h3>no Items</h3>
      ) : (
        <div key={Math.random()} className={classes.list}>
          {list.map((item) => (
            <ListItem key={Math.random()} item={item} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default List;
