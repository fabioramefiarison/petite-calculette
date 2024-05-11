import React, { useState} from "react";
import "./font awesome/all.min.css";


function Main() {
  const [play, setPlay] = useState(false);
  const [number1, setNumber1] = useState('?');
  const [number2, setNumber2] = useState('?');
  const [somme, setSomme] = useState(null);
  const [sommeInput, setsommeInput] = useState(0);
  const [alerte, setAlerte] = useState("");
  const [incorrecte, setIncorrecte] = useState(false);

  const handleJoueClick = () =>  {
    setPlay(!play);
  }

  const handleGenerate = () => {
    let value1 = Math.floor(Math.random() * 11)
    let value2 = Math.floor(Math.random() * 11)
    setNumber1(value1)
    setNumber2(value2)
    setSomme(value1 + value2)
  }

  const handleClick = () =>  {
    if (sommeInput === somme)  {
      setAlerte("Bravo! La réponse est correcte ")
    }
    else {
      setIncorrecte(!incorrecte)
      setAlerte("incorrecte, la réponse est " + somme)
    }
    if (sommeInput === "") {
      setIncorrecte(!incorrecte)
      setAlerte("Tsiafoy, veuillez entrer un nombre ")
    }
    if (number1 === 0 || number2 === 0) {
      setIncorrecte(!incorrecte)
      setAlerte("veuillez cliquer sur le bouton générer ")
    }

   }

   const handleInputChange = (e) =>  {
    setsommeInput(parseInt(e.target.value));
   }

    return (
      <div>
            <div className={"alerte" + incorrecte ? "incorrecte" : null} >
              {alerte}
            </div>
            <div id="eval">
                <span id="first-number" className="anim-number">{number1}</span>
                <span id="operating">+</span>
                <span id="second-number" className="anim-number">{number2}</span>
            </div>
            <div id="txt-resp"><span className="name">Marianna</span> donner la réponse :</div>
            <div>
                <input 
                  type="number"
                  id="input"
                  min={0} max={20} 
                  value={sommeInput}
                  onChange={handleInputChange}
                />
            </div>
           <input type="submit" 
               value={'génerer'}
               id="button"
               className="btn-generate"
               onClick={handleGenerate}/><br />
           <input type="button" 
               value={'SOUMETTRE'}
               id="button"
               onClick={handleClick}/> 
            <div id="play" className={play ? "new-play" : null}>
               <i className="fas fa-play" onClick={handleJoueClick}></i>
               <p>JOUER</p>
            </div>           
      </div>
    );
  }
  
  export default Main;
  