
import { useState } from "react";


// eslint-disable-next-line react/prop-types
const Contador = () => {
    //aqui va la logica de una funcion si quiero
    const [adicion, setAdicion]= useState(0);
    const [sustraccion,setSustraccion]= useState(0)
    const sumar =()=>{
setAdicion (adicion + 1) 

  }
const sumarNO =() => {

    setSustraccion (sustraccion + 1)


}
  return (
    <section>
      <h2>Contador</h2>
      <article className="d-flex justify-content-evenly">
        <button className="btn btn-success" onClick={sumar}>Me gusta<p className="mt-1 mb-1">{adicion}</p></button>
        <button className="btn btn-danger" onClick={sumarNO}>No me gusta<p className="mt-1 mb-1">{sustraccion}</p></button>
      </article>
 
    </section>

  );
};


export default Contador;
