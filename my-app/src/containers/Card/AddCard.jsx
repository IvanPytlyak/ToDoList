import React, { useState } from "react";
import styles from "./AddCard.module.scss";
import { Button } from "../../components/Button/Button";
import { InputCard } from "../../components/InputCard/InputCard";

export const AddCard = (props) => {
  const runInputTitle = (event) => {
    return props.runInputTitleUpper(event.target.value);
  };

  const runInputDescription = (event) => {
    return props.runInputDescriptionUpper(event.target.value);
  };

  return (
    <form className={styles.wrapper}>
      <h1 className={styles.center}>Список задач</h1>
      <InputCard
        placeholder="Title"
        onChangeHandler={runInputTitle}
      ></InputCard>
      <InputCard
        placeholder="Description"
        onChangeHandler={runInputDescription}
      ></InputCard>
      <Button runButonFunction={props.runButonFunctionUpper}>Submit</Button>
    </form>
  );
};

// import styles from "./AddCard.module.scss";
// import { Button } from "../../components/Button/Button";
// import { InputCard } from "../../components/InputCard/InputCard";

// export const AddCard = (props) => {
//   const runInputTitle = (event) => {
//     console.log(event.target.value);
//   };

//   const runInputDescription = (event) => {
//     console.log(event.target.value);
//   };

//   return (
//     <form className={styles.wrapper}>
//       <InputCard
//         placeholder="Title"
//         onChangeHandler={runInputTitle}
//       ></InputCard>
//       <InputCard
//         placeholder="Description"
//         onChangeHandler={runInputDescription}
//       ></InputCard>
//       <Button runButonFunction={props.runButonFunctionUpper}>Submit</Button>
//     </form>
//   );
// };
