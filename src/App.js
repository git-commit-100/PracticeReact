import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProfileForm from "./components/Profile/ProfileForm";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { AuthContext } from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn } = authCtx;
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/change-password">
            <ProfileForm />
          </Route>
        )}
        <Route path="*">
          <Redirect to={isLoggedIn ? "/profile" : "/auth"} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
