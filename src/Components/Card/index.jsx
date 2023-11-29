// Importa el estilo definido en el archivo 'index.css'
import './index.css';

// Definición de un componente funcional llamado Card que recibe un objeto 'data' como parámetro
const Card = (data) => {
 
  // Retorna un elemento JSX que representa la estructura de una tarjeta
  return (
    <div
      className="bg-white cursor-pointer w-56 h- rounded-lg shadow-md overflow-hidden mr-20 hover:scale-110"
    >
      {/* Sección de la imagen de la tarjeta  */}
      <figure className="relative w-full h-4/5">
        {/* Imagen de la tarjeta con propiedades dinámicas provenientes del objeto 'data' */}
        <img
          src={data.photo}
          alt={data.name}
          className="max-w-full h-full object-cover"
        />
        {/* Información sobre el plato en un cuadro de texto superpuesto a la imagen */}
        <figcaption className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-05">
          Plato número {data.id}
        </figcaption>
      </figure>

      {/* Sección de detalles del plato */}
      <div className="p-4">
        {/* Nombre del plato */}
        <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
        
        {/* Descripción del plato */}
        <p className="text-sm mb-4">{data.description}</p>
        
        {/* Precio del plato */}
        <p className="text-lg font-bold text-orange-700">${data.price}</p>
      </div>
    </div>
  );
};

// Exporta el componente Card 
export default Card;
