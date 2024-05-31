import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const ListOfCarts = () => {
  const [photosData, setPhotosData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      //   console.log(data);
      setPhotosData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container m-5 mt-3">
      <h3 className="text-center text-2xl font-bold mb-5">Products List</h3>
      <div className="grid grid-cols-3 py-10">
        {photosData.map((item, i) => (
          <Cart data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ListOfCarts;
