import React, { Component } from "react";
import UsersList from "./components/Users/UsersList";
import Button from "./components/UI/Button";
import "./App.css";
import UserFinder from "./components/Users/UserFinder";

// function App() {
//   const [showUsers, setShowUsers] = useState(true);

//   const handleTogglingUsers = () => {
//     setShowUsers((prevState) => !prevState);
//   };

//   return (
//     <div className="App">
//       <Button onClick={handleTogglingUsers}>
//         {showUsers ? "Hide Users" : "Show Users"}
//       </Button>
//       {showUsers && <UsersList users={USERS_DATA} />}
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = { showUsers: true, users: [] };
  }

  handleTogglingUsers() {
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  }

  handleUsersFilter(arr){
    this.setState({users: [...arr]})
  }

  render() {
    return (
      <div className="App">
        <UserFinder
          onUserFilter={this.handleUsersFilter.bind(this)}
        />
        <Button onClick={this.handleTogglingUsers.bind(this)}>
          {this.state.showUsers ? "Hide Users" : "Show Users"}
        </Button>
        {this.state.showUsers && <UsersList users={this.state.users} />}
      </div>
    );
  }
}

export default App;
