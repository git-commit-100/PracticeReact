import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const userLoginHandler = (user) => {
    setIsLoggedIn(true);
    setUser(user);
  };
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      {!isLoggedIn && <Login onUserLogin={userLoginHandler} />}
      {isLoggedIn && <UserProfile user={user} />}
    </>
  );
}

export default App;
