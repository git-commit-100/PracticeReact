import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={
        props.className
          ? `${props.className} ${classes.card}`
          : `${classes.card}`
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
