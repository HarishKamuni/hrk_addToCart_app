import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cart = useSelector((item) => item.user);
  return (
    <div className="bg-slate-300 h-[60px]">
      <nav className="flex justify-between px-8 items-center py-4">
        <Link to={'/'}>Navbar</Link>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="search photos..."
            className="w-full outline-none px-3 rounded-l-full py-1"
          />
          <span className="rounded-r-full bg-red-500 h-8">search</span>
        </div>
        <div className="flex justify-between gap-4">
          <div className="">
            <Link
              to={'/addToCart'}
              className="text-2xl relative cursor-pointer"
            >
              🛒
              <span className="absolute bg-red-500 px-1 text-white rounded-full -left-1 -top-1 text-sm">
                {cart.carts.length}
              </span>
            </Link>
          </div>

          <span>user icon</span>
          <button className="bg-green-500 px-3 py-1 rounded-md uppercase text-white">
            login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
