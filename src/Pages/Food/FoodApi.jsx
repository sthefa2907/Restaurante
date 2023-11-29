// Función asíncrona para obtener datos de alimentos desde una API externa
export const fetchFoodData = async () => {
  try {
    // Realiza una solicitud a la URL de la API de platos de comida
    const response = await fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Food/');
    
    // Verifica si la respuesta de la red es exitosa (código de estado 200-299)
    if (!response.ok) {
      throw new Error('La respuesta de la red no fue exitosa');
    }

    // Convierte la respuesta a formato JSON para obtener los datos
    const data = await response.json();
    
    // Retorna los datos obtenidos
    return data;
  } catch (error) {
    // Captura y maneja cualquier error que pueda ocurrir durante la solicitud o conversión a JSON
    console.error('Error al obtener los datos:', error);
    
    // En caso de error, retorna un arreglo vacío
    return [];
  }
};
