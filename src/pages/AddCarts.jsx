import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';

const AddCarts = () => {
  const data = useSelector((items) => items.user);
  console.log(data);
  return (
    <div>
      <h2>Total carts: {data.carts.length}</h2>
      <div className="container m-5 mt-3">
        <h3 className="text-center text-2xl font-bold mb-5">Cart List</h3>
        <div className="grid grid-cols-3 py-10">
          {data.carts.map((item, i) => (
            <Cart data={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCarts;
