import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
// import Alert from './components/Alert';
import Osoba from "./components/Osoba";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick} type="button" class="btn btn-warning">
          Naciśnij mnie
        </button>
        <p>Moja liczba kliknięć: {count}</p>
        <div>
        <Osoba
          obrazek="https://art.ngfiles.com/thumbnails/374000/374601_full.png?f1555228582"
          opis="Some quick example text to build on the card title and make up the
          bulk of the card's content."
          link="https://www.newgrounds.com/art/view/lilg/rick-and-morty-go-to-hell"
        />
        <Osoba
          obrazek="https://art.ngfiles.com/images/2783000/2783876_lilg_the-funny-nightmare.png?f1665843103"
          opis="I still do art! Why am I not posting to here! My goal for 2023 is to have way more post on NG. I miss this place."
          link="https://www.newgrounds.com/art/view/lilg/the-funny-nightmare"
        /></div>
      </header>
    </div>
  );
}

export default App;
