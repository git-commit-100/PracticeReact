import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProfileForm from "./components/Profile/ProfileForm";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/change-password">
          <ProfileForm />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
