import classes from "./CommentItem.module.css";
import { Icon } from "@iconify/react";

const CommentItem = (props) => {
  return (
    <li className={classes.comment}>
      <Icon icon="mdi:account-circle" className={classes.icon} />
      &nbsp;&nbsp;
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
