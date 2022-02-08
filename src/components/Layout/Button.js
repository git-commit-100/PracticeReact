import styles from "./Button.module.css";

function Button({ type, className, onClick, disabled, children }) {
  return (
    <button
      type={type ? type : "button"}
      className={className ? `${className} ${styles["btn"]}` : styles["btn"]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
