import React, { Component } from "react";
import UserFinder from "./components/User/UserFinder";
import "./App.css";

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
  render() {
    return (
      <div className="App">
        <UserFinder />
      </div>
    );
  }
}

export default App;
