import { Link } from "react-router-dom";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h3>Welcome to React Authentication</h3>
      <Link className="btn" to="/auth">
        Go To Login Page
      </Link>
    </section>
  );
};

export default StartingPageContent;
