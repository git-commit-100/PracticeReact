import React, { Component } from "react";
import styles from "./UsersList.module.css";
import User from "./User";

// function UsersList(props) {
//   return (
//     <ul className={styles["users-list"]}>
//       {props.users.map((user) => {
//         return <User key={user.id} user={user}></User>;
//       })}
//     </ul>
//   );
// }

class UsersList extends Component {
  render() {
    return (
      <ul className={styles["users-list"]}>
        {this.props.users.map((user) => {
          return <User key={user.id} user={user}></User>;
        })}
      </ul>
    );
  }
}

export default UsersList;
