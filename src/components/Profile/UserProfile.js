import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";
import classes from "./UserProfile.module.css";
import helloUser from "../../assets/helloUser.png";

const UserProfile = () => {
  const authCtx = useContext(AuthContext);
  const { email } = authCtx;
  return (
    <section className={classes.profile}>
      <h1>Hello {email ? email : "User"}</h1>
      <img src={helloUser} alt="Hello Useer" />
      <Link to={"/change-password"} className="btn">
        Change Password Here
      </Link>
    </section>
  );
};

export default UserProfile;
