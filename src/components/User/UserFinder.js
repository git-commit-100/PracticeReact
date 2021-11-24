import React, { Component } from "react";
import styles from "./UserFinder.module.css";
import Users from "./Users";

const USERS_DATA = [
  {
    id: 1,
    name: "Tony Stark",
    age: 30,
  },
  {
    id: 2,
    name: "Peter Parker",
    age: 18,
  },
  {
    id: 3,
    name: "Almighty Thor",
    age: 135,
  },
  {
    id: 4,
    name: "Starlord",
    age: 28,
  },
  {
    id: 5,
    name: "Steve Rogers",
    age: 90,
  },
];

/* function UserFinder() {
  const [showUser, setShowUser] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(USERS_DATA);

  function toggleUserDisplay() {
    setShowUser((currState) => !currState);
  }

  function handleSearchInputChange(e) {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    setFilteredUsers(
      USERS_DATA.filter((user) => {
        return user.name.includes(searchInput);
      })
    );
  }, [searchInput]);

  return (
    <>
      <label htmlFor="search-user-input">Search User Here</label>
      <input
        className={styles["search-user-input"]}
        type="search"
        value={searchInput}
        onChange={handleSearchInputChange}
        autoComplete="off"
      />
      <Users
        showUserState={showUser}
        toggleUsers={toggleUserDisplay}
        users={filteredUsers}
      />
    </>
  );
} */

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      showUser: true,
      searchInput: "",
      filteredUsers: [],
    };
  }

  componentDidMount() {
    //runs before component is presented to DOM
    this.setState({ filteredUsers: USERS_DATA });
  }

  componentDidUpdate(prevProps, prevState) {
    //runs at every component update
    if (prevState.searchInput !== this.state.searchInput) {
      const updatedUsers = USERS_DATA.filter((user) => {
        return user.name.includes(this.state.searchInput);
      });
      this.setState({ filteredUsers: updatedUsers });
    }
  }

  toggleUserDisplay() {
    this.setState((currState) => {
      return { showUser: !currState.showUser };
    });
  }

  handleSearchInputChange(e) {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    return (
      <>
        <label htmlFor="search-user-input">Search User Here</label>
        <input
          className={styles["search-user-input"]}
          type="search"
          value={this.state.searchInput}
          onChange={this.handleSearchInputChange.bind(this)}
          autoComplete="off"
        />
        <Users
          showUserState={this.state.showUser}
          toggleUsers={this.toggleUserDisplay.bind(this)}
          users={this.state.filteredUsers}
        />
      </>
    );
  }
}

export default UserFinder;
