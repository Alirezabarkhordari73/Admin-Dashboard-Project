import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../context/ContextProvider";
import { cartData } from "../data/data";
import { Button } from "../components";

const Cart = () => {
  const { currentColor, handleClick, initialState } = useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="w-400 bg-white dark:bg-[#42464D] h-screen float-right p-4 user-profile">
        <div className="flex justify-between items-center p-4 dark:text-gray-100">
          <p>Shopping Cart</p>
          <button
            onClick={() => handleClick(initialState["cart"])}
            className="w-10 h-10 font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 rounded-full flex items-center justify-center text-2xl text-gray-400">
            <MdOutlineCancel />
          </button>
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-500 p-4">
                <img className="rounded-lg h-80 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold dark:text-gray-100">
                    {item.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                    {item.category}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg dark:text-gray-50">
                      {item.price}
                    </p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 ">
                        <AiOutlineMinus />
                      </p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                        0
                      </p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
