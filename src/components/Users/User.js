import React, { Component } from "react";
import styles from "./User.module.css";

// function User(props) {
//     return (
//         <li className={styles["user-item"]}>
//             {props.user.name}
//         </li>
//     )
// }

class User extends Component {
  render() {
    return <li className={styles["user-item"]}>{this.props.user.name}</li>;
  }
}

export default User;
