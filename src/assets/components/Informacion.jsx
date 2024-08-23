
// eslint-disable-next-line react/prop-types
const Informacion = ({clasicoActual,miEquipo}) => {

  return (
<>
    
    <div className=" p-5 rounded-2"><h1>La Historia de mi equipo {miEquipo}</h1><h2 >Clasico rival : {clasicoActual} </h2>
    <p className="mt-5 text-secondary-emphasis">El Club Atlético San Martín es una institución deportiva de la ciudad de San Miguel de Tucumán, fundada por 14 jóvenes del sur de la misma a comienzos del Sigo XX.
    Los fundadores, que fueron Romelio Castro, Ezequiel Riquelme, Secundino Torossi, Medardo Figueroa, Ramón Méndez, Zacarías Robles, Segundo Medina, Manuel Reynoso, Justo González, Alberto Muruaga, Segundo Rivero, Amado Pereyra, Angel Suárez y Ramón Romano, pensaron al club como un lugar de encuentro para la juventud de la época que no tenía acceso a los clubes más selectos. En fin, buscaban una entidad que reuniera a las clases más populares.
    Con esta impronta, finalmente el acta de fundación se firmó el <strong>2 de noviembre de 1909</strong>, y desde entonces el CASM siempre fue protagonista de los torneos de la Federación Tucumana de Fútbol, consagrándose como el primer campeón en 1919 y adoptando ese deporte como actividad principal.
    En sus más de 100 años de historia el CASM ha sabido representar al deporte tucumano en varias disciplinas a lo largo y ancho del país, donde gracias a sus actuaciones en el fútbol trascendió en el inconsciente colectivo como una de las instituciones deportivas más representativas de la región.</p>
   </div>
 </> 
 )
  
}
export default Informacion