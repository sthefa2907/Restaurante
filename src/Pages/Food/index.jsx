import { useState, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { fetchFoodData } from "./FoodApi"; 
import './index.css'



function Food() {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFoodData();
        setFoodData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

export default Food;
