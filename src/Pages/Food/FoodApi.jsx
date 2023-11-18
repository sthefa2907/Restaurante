export const fetchFoodData = async () => {
    try {
      const response = await fetch('https://kaoxdc.pythonanywhere.com/api-ficha2669739/Food/');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  