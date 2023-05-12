import styles from "./InputCard.module.scss";
export const InputCard = (props) => {
  return (
    <input
      className={styles.input_card}
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    />
  );
};
