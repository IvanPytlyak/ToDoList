import React from "react";
import styles from "./PostList.module.scss";
import { Button } from "../Button/Button";
import { PostItem } from "../PostItem/PostItem";
import { Modal } from "../../containers/Modal/Modal";

export const PostList = (props) => {
  return (
    <div>
      {props.posts.map((post, index) => (
        <PostItem
          number={index + 1}
          post={post}
          key={post.id}
          remove={props.remove}
          /* строка 14 - не работает */
        />
      ))}
    </div>
  );
};
