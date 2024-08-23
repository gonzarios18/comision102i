import "./App.css";
import Contador from "./assets/components/Contador";
import Informacion from "./assets/components/Informacion";
import "bootstrap/dist/css/bootstrap.min.css";

function App() { 
  
  const clasico = "Atletico Tucuman";
  const santo = "San Martin de Tucuman";



  
  
  return (
    <>
      <Informacion miEquipo={santo} clasicoActual={clasico} />
      <Contador  />
    </>
  );
}

export default App;
