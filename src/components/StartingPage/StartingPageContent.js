import { Link } from "react-router-dom";
import classes from "./StartingPageContent.module.css";
import indexPng from "../../assets/index.png";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

const StartingPageContent = () => {
  const authCtx = useContext(AuthContext);
  const { isLoggedIn } = authCtx;
  return (
    <section className={classes.starting}>
      <h3>Welcome to React Authentication</h3>
      <img
        className={classes["img-welcome"]}
        src={indexPng}
        alt="How are you ?"
      />
      <Link className="btn" to={isLoggedIn ? "/profile" : "/auth"}>
        {isLoggedIn ? "Go To Profile Page" : "Go To Login Page"}
      </Link>
    </section>
  );
};

export default StartingPageContent;
