import React from "react";
import "./Osoba.css";

const Osoba = (props) => {
  return (
    <div class="card">
      <img
        src={props.obrazek}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          {props.opis}
        </p>
        <a
          href={props.link}
          target="new"
          class="btn btn-primary"
        >
          Idź do strony
        </a>
      </div>
    </div>
  );
};

export default Osoba;
