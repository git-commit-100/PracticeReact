import styles from "./Input.module.css";

function Input({ label, error, inputConfig, whenError }) {
  /* hooks must be used in parent component 
     props must have
        label
        error
        inputConfig => all input info from hooks
        whenError => hooks => whenTouched && notValid
    */
  return (
    <section className={styles["input-section"]}>
      <label className={styles["input-label"]}>{label}</label>
      <input {...inputConfig} />
      {whenError && <p className={styles["input-error"]}>{error}</p>}
    </section>
  );
}

export default Input;
