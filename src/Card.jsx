import { useEffect, useState } from "react";


export default function Card(props){

// La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);
  return(
    <>

    <div className="imgenes" >
    <div className='types'>
    {data.map((el, i) => {
        return <p key={i}>{el.type}</p>;
      })} </div>

    <div className="rating">
    {data.map((el, i) => {
      return <p key={i}>{el.rating}</p>
    })}</div>
    </div>
  </>
  )
}

console.log(Card);


