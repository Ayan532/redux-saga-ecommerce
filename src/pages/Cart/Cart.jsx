import React from 'react';
import CartItem from './CartItem';

const Cart = () => {
  return (
    <div className="h-screen bg-gray-100 pt-20 px-20 md:px-0">
      <div className="mx-auto max-w-5xl justify-center  px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3 h-[70vh] scroll-smooth overflow-y-auto scroll-disable">
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </div>
        {/* Sub total */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">₹ 2590</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">₹ 250</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className=" ml-5 mb-1 text-lg font-bold">₹ 2590 </p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;