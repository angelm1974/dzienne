import React from "react";
import "./Alert.css";

// export default function Alert() {
//   return (
//     <>
//       <div>Alert</div>
//       <div>Zło!</div>
//     </>
//   );
// }

const Alert = (props) => {
  let ikona = "bi bi-nut";

  if (props.liczba < 10) {
    ikona = "bi bi-nut";
  } else {
    ikona = "bi bi-nut-fill";
  }
  
  return (
    <>
      <i class={ikona}></i>
    </>
  );
};

export default Alert;
