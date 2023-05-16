import React, { useState } from "react";
import { AddCard } from "../../containers/Card/AddCard";
import { InputCard } from "../../components/InputCard/InputCard";
import { Button } from "../../components/Button/Button";
import { PostItem } from "../../components/PostItem/PostItem";
import { PostList } from "../../components/PostsList/PostList";

import styles from "./Main.module.scss";

export const Main = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [posts, setPosts] = useState([]);

  const addNewItem = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      description,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setDescription(""); // что за двустороннее связывание и почему интпуты не чисятся?
    // event.target.reset(); //значение по умолчанию доступен только для формы
  };

  const removePosts = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id)); // что это за "p"??? как это работает?
  };

  return (
    <div className={styles.wrap}>
      <AddCard
        runInputTitleUpper={setTitle}
        runInputDescriptionUpper={setDescription}
        runButonFunctionUpper={addNewItem}
        title={title}
        description={description}
      />
      <PostList posts={posts} remove={removePosts} />
      {/* строка 39 - не работает remove={removePosts} из-за этой строки перестала работать кнопка добавления */}
    </div>
  );
};
