import React, { useState } from "react";
import styles from "./AddCard.module.scss";
import { Button } from "../../components/Button/Button";
import { InputCard } from "../../components/InputCard/InputCard";
import { Modal } from "../Modal/Modal";

export const AddCard = ({
  runInputTitleUpper,
  runInputDescriptionUpper,
  title,
  description,
  runButonFunctionUpper,
}) => {
  const runInputTitle = (event) => {
    return runInputTitleUpper(event.target.value);
  };

  const runInputDescription = (event) => {
    return runInputDescriptionUpper(event.target.value);
  };

  return (
    <form className={styles.wrapper}>
      <h1 className={styles.center}>Список задач</h1>
      <InputCard
        placeholder="Title"
        onChangeHandler={runInputTitle}
        value={title}
      ></InputCard>
      <InputCard
        placeholder="Description"
        onChangeHandler={runInputDescription}
        value={description}
      ></InputCard>
      <Button runButonFunction={runButonFunctionUpper}>Submit</Button>
    </form>
  );
};

// export const AddCard = (props) => {
//   const runInputTitle = (event) => {
//     return props.runInputTitleUpper(event.target.value);
//   };

//   const runInputDescription = (event) => {
//     return props.runInputDescriptionUpper(event.target.value);
//   };

//   return (
//     <form className={styles.wrapper}>
//       <h1 className={styles.center}>Список задач</h1>
//       <InputCard
//         placeholder="Title"
//         onChangeHandler={runInputTitle}
//         value={props.title}
//       ></InputCard>
//       <InputCard
//         placeholder="Description"
//         onChangeHandler={runInputDescription}
//         value={props.description}
//       ></InputCard>
//       <Button runButonFunction={props.runButonFunctionUpper}>Submit</Button>
//     </form>
//   );
// };
