import { Link } from "react-router-dom";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <Link to={"/change-password"} className="btn">
        Change Password Here
      </Link>
    </section>
  );
};

export default UserProfile;
