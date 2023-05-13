import React from "react";
import { Button } from "../Button/Button";
import styles from "./PostItem.module.scss";

export const PostItem = (props) => {
  return (
    <div className={styles.wrap}>
      <h2>{props.number}. Title</h2>
      <div>{props.post.title}</div>

      <h2>Description</h2>
      <div>{props.post.description}</div>
      <div className={styles.mubtns}>
        <Button>Edit</Button>
        <Button runButonFunction={props.remove(props.post)}>Delete</Button>
        {/* строка 19 - не работает, и как работать с кнопками, если тут в remove нужно прокидывать пропс, а в кнопке добавление поста нет. */}
      </div>
    </div>
  );
};
