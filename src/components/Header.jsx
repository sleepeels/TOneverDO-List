import { Fragment } from "react";
import classes from "./Header.module.css";

import rectIMG from "../assets/rects.png";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>TOneverDO List</h1>

        <img src={rectIMG} alt="" className={classes.rectimg} />
      </header>
    </Fragment>
  );
};

export default Header;
