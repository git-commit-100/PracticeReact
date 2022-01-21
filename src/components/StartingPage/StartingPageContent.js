import { Link } from "react-router-dom";
import classes from "./StartingPageContent.module.css";
import indexPng from "../../assets/index.png";

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h3>Welcome to React Authentication</h3>
      <img
        className={classes["img-welcome"]}
        src={indexPng}
        alt="How are you ?"
      />
      <Link className="btn" to="/auth">
        Go To Login Page
      </Link>
    </section>
  );
};

export default StartingPageContent;
