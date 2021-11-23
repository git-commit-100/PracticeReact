import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import styles from "./UserFinder.module.css";

const USERS_DATA = [
  { id: 1, name: "Tony Stark", age: 29 },
  { id: 2, name: "Peter Parker", age: 19 },
  { id: 3, name: "Thor God Of Lightning", age: 125 },
  { id: 4, name: "Groot", age: 3 },
  { id: 5, name: "Wade Watts", age: 28 },
];

function UserFinder(props) {
  const [inputData, setInputData] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(USERS_DATA);

  function handleInputChange(e) {
    setInputData(e.target.value);
  }
  useEffect(() => {
    const updatedUsers = filteredUsers.filter((elem) => {
      return elem.name.includes(inputData);
    });
    props.onUserFilter(updatedUsers);
  }, [inputData]);

  return (
    <div className={styles["user-finder"]}>
      <label htmlFor="user-finder-input">Search User&nbsp;&nbsp;</label>
      <input
      autoComplete="off"
        type="text"
        value={inputData}
        onChange={handleInputChange}
        id="user-finder-input"
      />
    </div>
  );
}

export default React.memo(UserFinder);
