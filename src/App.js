import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'
const getFromLocalStorage = () => {
  if(localStorage.getItem('theme')){
    return localStorage.getItem('theme')
  } else{
    return 'light-mode';
  }
}


function App() {
  const [theme, setTheme] = useState(getFromLocalStorage() || 'light-mode');

  //funzione cambio tema
  const cambiatema = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
      console.log(theme);
    } else {
      setTheme("light-mode");
      console.log(theme);
    }
  };

  //Al mutare del theme state, inserisci la classe corretta in base al theme
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <section className="section-center">
      <div className="container">
        <div>
         <button className="btn" onClick={cambiatema}>Change</button>
        </div>

        <section className="article-section">
          {data.map((el) => (
            <Articolo key={el.id} {...el} />
          ))}
        </section>
      </div>
    </section>
  );
}

export default App;
