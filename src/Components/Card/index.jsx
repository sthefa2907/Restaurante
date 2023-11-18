import './index.css';

const Card = (data) => {
 
 

  return (
    <div
      className="bg-white cursor-pointer w-56 h- rounded-lg shadow-md overflow-hidden mr-20 hover:scale-110"
      
    >
      <figure className="relative w-full h-4/5">
        <img
          src={data.photo}
          alt={data.name}
          className="max-w-full h-full object-cover"
        />
        <figcaption className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2 px-3 py-05">
          Plate of food {data.id}
        </figcaption>
      </figure>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
        <p className="text-sm mb-4">{data.description}</p>
        <p className="text-lg font-bold text-orange-700">${data.price}</p>
      </div>
    </div>
  );
};

export default Card;
