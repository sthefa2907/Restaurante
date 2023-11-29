// Importa los hooks useState y useEffect de React, así como los componentes Card y Layout
import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
// Importa la función fetchFoodData desde el archivo FoodApi
import { fetchFoodData } from "./FoodApi";
// Importa el archivo de estilos index.css
import './index.css'

// Definición del componente Food
function Food() {
  // Declara el estado foodData que almacenará los datos de alimentos y la función setFoodData para actualizarlo
  const [foodData, setFoodData] = useState([]);

  // Utiliza el hook useEffect para realizar operaciones después de que el componente ha sido renderizado
  useEffect(() => {
    // Define una función asíncrona fetchData para obtener los datos de alimentos
    const fetchData = async () => {
      try {
        // Invoca la función fetchFoodData para obtener los datos y los almacena en la variable data
        const data = await fetchFoodData();
        // Actualiza el estado foodData con los datos obtenidos
        setFoodData(data);
      } catch (error) {
        // Maneja cualquier error ocurrido durante la obtención de datos
        console.error('Error fetching data:', error);
      }
    };

    // Invoca la función fetchData al montar el componente (equivalente a componentDidMount en clases)
    fetchData();
  }, []); // El array vacío asegura que useEffect solo se ejecute al montar el componente

  // Renderiza el componente Food
  return (
    <>
      {/* Utiliza el componente Layout para estructurar la página */}
      <Layout>
        {/* Crea una cuadrícula con 1 columna en pantallas pequeñas, 2 columnas en pantallas medianas,
          3 columnas en pantallas grandes y 4 columnas en pantallas extra grandes,
          con un espacio de separación de 4 unidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Mapea sobre los datos de alimentos y renderiza un componente Card para cada uno */}
          {foodData.map(item => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              photo={item.photo}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

// Exporta el componente Food para que pueda ser utilizado en otros archivos
export default Food;
