import React, { Component } from "react";
import UserFinder from "./components/User/UserFinder";
import "./App.css";
import UserContext from "./components/store/user-context";
import ErrorBoundary from "./components/ErrorBoundary";

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

class App extends Component {
  render() {
    return (
      <UserContext.Provider value={{ users: USERS_DATA }}>
        <div className="App">
          <ErrorBoundary>
            <UserFinder />
          </ErrorBoundary>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
