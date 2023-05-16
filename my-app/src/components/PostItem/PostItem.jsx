import React, { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./PostItem.module.scss";
import { InputCard } from "../InputCard/InputCard";

export const PostItem = ({ post, remove, number, title, description }) => {
  const deletIt = () => {
    remove(post);
  };

  const [isVisible, setIsVisible] = useState(false);

  const [currentTitle, setCurrentTitle] = useState(post.title);
  const [currentDescription, setCurrentDescription] = useState(
    post.description
  );

  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  const saveChanges = () => {
    post.title = currentTitle;
    post.description = currentDescription;
    closeModal();
  };

  const changesTitle = (event) => {
    setCurrentTitle(event.target.value);
  };
  const changesDescription = (event) => {
    setCurrentDescription(event.target.value);
  };

  return (
    <div className={styles.wrap}>
      <h2>{number}. Title</h2>
      <div>{post.title}</div>

      <h2>Description</h2>
      <div>{post.description}</div>
      <div className={styles.mubtns}>
        <Button runButonFunction={openModal}>Edit</Button>
        <Button runButonFunction={deletIt}>Delete</Button>
      </div>
      <div className={isVisible ? styles.visible : styles.hidden}>
        <InputCard value={currentTitle} onChangeHandler={changesTitle} />
        <InputCard
          value={currentDescription}
          onChangeHandler={changesDescription}
        />
        <Button runButonFunction={saveChanges}>Save</Button>
        <Button runButonFunction={closeModal}>Close</Button>
      </div>
    </div>
  );
};
