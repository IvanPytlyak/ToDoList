import React, { useState } from "react";
import { AddCard } from "../../containers/Card/AddCard";
import { InputCard } from "../../components/InputCard/InputCard";
import { Button } from "../../components/Button/Button";

export const Main = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addNewItem = (event) => {
    event.preventDefault();
    console.log(title, description);
  };

  return (
    <AddCard
      runInputTitleUpper={setTitle}
      runInputDescriptionUpper={setDescription}
      runButonFunctionUpper={addNewItem}
    />
  );
};
