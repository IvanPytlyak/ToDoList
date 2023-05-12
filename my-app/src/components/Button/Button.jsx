import styles from "./Button.module.scss";
export const Button = (props) => {
  return (
    <button className={styles.btn} onClick={props.runButonFunction}>
      {props.children}
    </button>
  );
};
