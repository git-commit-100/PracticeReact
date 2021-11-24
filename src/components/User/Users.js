import React, { Component } from "react";
import User from "./User";
import styles from "./Users.module.css";
import Button from "../UI/Button";

/* function Users(this.props) {

  const userJsx = this.props.users.map((user) => {
    return (
      <User
        key={user.id}
        id={user.id}
        userName={user.name}
        userAge={user.age}
      />
    );
  });

  return (
    <>
      <Button onClick={this.props.toggleUsers}>
        {this.props.showUserState ? "Hide User" : "Show User"}
      </Button>
      <ul className={styles["users-list"]}>{this.props.showUserState && userJsx}</ul>
    </>
  );
} */

class Users extends Component {
  render() {
    const userJsx = this.props.users.map((user) => {
      return (
        <User
          key={user.id}
          id={user.id}
          userName={user.name}
          userAge={user.age}
        />
      );
    });

    return (
      <>
        <Button onClick={this.props.toggleUsers}>
          {this.props.showUserState ? "Hide User" : "Show User"}
        </Button>
        <ul className={styles["users-list"]}>
          {this.props.showUserState && userJsx}
        </ul>
      </>
    );
  }
}

export default Users;
