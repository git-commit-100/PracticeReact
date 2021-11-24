import React, { Component } from "react";
import styles from "./User.module.css";

/* function User(props) {
    return (
        <li className={styles["user-element"]}>
            {props.userName}
        </li>
    )
} */

class User extends Component {
  componentWillUnmount() {
    //runs before deleting component from DOM
    console.log("User Component Unmounted");
  }

  render() {
    return <li className={styles["user-element"]}>{this.props.userName}</li>;
  }
}

export default User;
