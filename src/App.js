import React, { Component } from "react";
import UsersList from "./components/Users/UsersList";
import Button from "./components/UI/Button";
import "./App.css";

const USERS_DATA = [
  { id: 1, name: "Tony Stark", age: 29 },
  { id: 2, name: "Peter Parker", age: 19 },
  { id: 3, name: "Thor God Of Lightning", age: 125 },
  { id: 4, name: "Groot", age: 3 },
  { id: 5, name: "Wade Watts", age: 28 },
];

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
    this.state = { showUsers: false };
  }

  handleTogglingUsers() {
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  }

  render() {
    return (
      <div className="App">
        <Button onClick={this.handleTogglingUsers.bind(this)}>
          {this.state.showUsers ? "Hide Users" : "Show Users"}
        </Button>
        {this.state.showUsers && <UsersList users={USERS_DATA} />}
      </div>
    );
  }
}

export default App;
