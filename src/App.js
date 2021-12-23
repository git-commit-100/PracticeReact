import Header from "./components/Header";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuthenticated && <Login />}
      {isAuthenticated && <UserProfile />}
    </>
  );
}

export default App;
