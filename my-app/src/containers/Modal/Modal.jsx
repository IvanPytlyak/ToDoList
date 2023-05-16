// import React, { useState } from "react";
// import { InputCard } from "../../components/InputCard/InputCard";
// import { Button } from "../../components/Button/Button";
// import styles from "./Modal.module.scss";

// export const Modal = ({ title, description }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   //   const toggleVisibility = () => {
//   //     setIsVisible(!isVisible);
//   //   };

//   const openModal = () => {
//     setIsVisible(true);
//   };
//   const closeModal = () => {
//     setIsVisible(false);
//   };

//   return (
//     <div>
//       {/* <Button runButonFunction={openModal}>Edit</Button> */}
//       <div className={isVisible ? "hidden" : "visible"}>
//         <InputCard value={title} />
//         <InputCard value={description} />
//         {/* <Button runButonFunction={toggleVisibility}>Save</Button> */}
//         <Button runButonFunction={closeModal}>Close</Button>
//       </div>
//     </div>
//   );
// };
