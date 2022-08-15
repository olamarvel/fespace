import React, { useContext } from 'react';
import { PRODUCTCONTEXT } from '../contexts';
import CartItem from './CartItem';


export const CartList = ({cart,handleUpdateCartQty, handleRemoveFromCart}) => {
  // const { cart } = useContext(PRODUCTCONTEXT);
  return (
    <>
      <h2 className="mb-4 text-lg text-bold pl-4"> Your cart lists</h2>
      <div className="grid grid-cols-12 gap-4 py-4 px-4" id="products">
        {cart?.line_items?.map((product) => (
          <CartItem key={product.id} data={product} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
        ))}
      </div>
    </>
  );
};
