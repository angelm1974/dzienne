import React, { useState } from "react";
import Formularz from "./Formularz";

export default function DaneFormularz() {
  const [frmDane, setDane] = useState(null);

  const addDane = (dane) => {
    setDane(dane);
    console.log(dane);
  };
  return (
    <div class="container">
      <div class="container pb-5">Formularz i konsument</div>
      <Formularz onSubmit={addDane} />
      {frmDane && (
        <div class="container pt-5">
          <p>Imię: {frmDane.imie}</p>
          <p>Nazwisko {frmDane.nazwisko}</p>
          <p>Wiek: {frmDane.wiek}</p>
          <p>Email: {frmDane.email}</p>
        </div>
      )}
    </div>
  );
}
