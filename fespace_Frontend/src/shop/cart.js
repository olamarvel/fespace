// import React from 'react';
import React, { useContext } from 'react'
// import { stripHtml } from 'string-strip-html'
import { PRODUCTCONTEXT } from '../contexts'
// import { Container, Typography, button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

import CartItem from './CartItem'
import { Slider } from '../component'
// import ProductsList from './productList'
import { CartList } from './CartList'

const Cart = ({cart, handleEmptyCart,handleUpdateCartQty, handleRemoveFromCart}) => {
  // const handleEmptyCart = () => onEmptyCart()
  // const { cart, handleEmptyCart } = useContext(PRODUCTCONTEXT)

  const renderEmptyCart = () => (
    <div className="flex justify-center items-center h-full ">
      <span className=" flex justify-center items-center span text-xl ">
        You have no items in your shopping cart,
        <Link className={'font-semibold opacity-100'} to="/product">
          start adding some
        </Link>
      </span>
    </div>
  )

  if (!cart.line_items) return 'Loading'


  const renderCart = () => (
    <>
      <div className="mb-4">
        <Slider
          data={cart.line_items}
          Slide={CartItem}
          development={false}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
              centeredSlides: true,
            },
          }}
          // play={false}
        />
      </div>
      <CartList cart={cart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>
      <div className="flex justify-between px-4 my-8">
        <h2>Subtotal: {cart.subtotal.formatted_with_symbol}</h2>
        <div className="flex gap-4 ">
          <button className={'btn'} onClick={handleEmptyCart}>
            Empty cart
          </button>
          <Link to={`../checkout/${cart.id}`}>
            {/* <button className={'btn'} onClick={handleEmptyCart}> */}
            <button className={'btn'}>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  )

  return (
    <section className="px-2 md:px-8  min-h-50">
      {!cart.line_items.length ? (
        renderEmptyCart()
      ) : (
        <>
          {/* <span className="mb-4 text-lg text-bold">Your Shopping Cart</span> */}
          {renderCart()}
        </>
      )}
    </section>
  )
}

export default Cart



// pk_test_TYooMQauvdEDq54NiTphI7jx
// pk_test_457570ab897ff8917e14f7439a9c9bc9fd59e9167d312
