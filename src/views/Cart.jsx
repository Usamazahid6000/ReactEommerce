import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItems } from "../Redux/CartSlice";
function Cart() {
  const [open, setOpen] = useState(true);
  const items = useSelector(selectItems) || [];

  return (
    <>
      <div className="mx-auto mt-24 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 border-t border-gray-200 px-4 py-6 sm:px-6">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 my-5">
            Cart
          </h2>
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items.map((item) => {
                const { title, price, description, image } = item.items; //

                return (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={image}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{title}</h3>
                          <p className="ml-4">${price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {description}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="text-gray-500">
                          <label
                            htmlFor="quantity"
                            className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                          >
                            Qty
                          </label>
                          <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
