import React from 'react';
import { useDispatch } from 'react-redux';
import { AddCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = ({ data, i }) => {
  const dispatch = useDispatch();
  return (
    <div className="max-w-[300px] h-[400px] bg-red-400 m-5 rounded-sm">
      <div className="flex flex-col items-center justify-center p-3 ">
        <img
          src={data.image}
          alt="url"
          className=" mb-2 rounded-sm bg-cover w-[250px] h-[250px]"
        />
        <span className="">{data.title}</span>
        <div className="grid grid-cols-2 p-2">
          <span>Price:{data.price}</span>
          <span>Category:{data.category}</span>
          {data.quantity > 1 ? <span>quantity:{data.quantity}</span> : null}
          <button
            onClick={() => dispatch(AddCart(data))}
            className="bg-green-500 py-1 px-3 rounded-md hover:bg-green-400"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
