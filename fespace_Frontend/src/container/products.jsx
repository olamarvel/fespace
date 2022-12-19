import React, { useEffect, useMemo, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { Slider } from '../component'
import ProductBar from '../component/productBar'
import commerce from '../commerce.js'
import ProductsList from '../shop/productList'
import ProductItem from '../shop/productItem'
import Cart from '../shop/cart'
import Checkout from '../shop/TheCheckout'

// const cat = ['books', 'male', 'female', 'laptop', 'people', 'others']
const Products = () => {
  // const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  } 

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item.cart)
  }

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity })

    setCart(response.cart)
  }

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId)

    setCart(response.cart)
  }

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty()
    setCart(response.cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()
    setCart(newCart)
  }

  const handleCaptureCheckout = useMemo(
    () => async (checkoutTokenId, newOrder) => {
      try {
        const incomingOrder = await commerce.checkout.capture(
          checkoutTokenId,
          newOrder
        )

        setOrder(incomingOrder)

        refreshCart()
      } catch (error) {
        setErrorMessage(error.data.error.message)
      }
    },
    []
  )

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  const Index = (
    <>
      {products && (
        <>
          {/* {console.log(products)} */}
          <Slider data={products} Slide={ProductItem} development={false} />
          <div className="h-6" />
          <div className="">
            <ProductsList
              products={products}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </>
      )}
    </>
  )

  // const variables = useMemo(
  //   () => ({
  //     products,
  //     setProducts,
  //     handleAddToCart,
  //     handleUpdateCartQty,
  //     handleRemoveFromCart,
  //     handleEmptyCart,
  //     handleCaptureCheckout,
  //     cart,
  //     order,
  //     errorMessage,

  //     refreshCart,
  //   }),
  //   [cart, errorMessage, handleCaptureCheckout, order, products]
  // )
  return (
    <>
      {/* <PRODUCT value={variables}> */}
      <ProductBar noCategory={true} cart={cart} />
      <div className="h-6" />
      <Routes>
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleEmptyCart={handleEmptyCart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        <Route exact path="/" element={Index} />
        <Route
          path="/checkout/:id"
          exact
          element={
            <Checkout
              onCaptureCheckout={handleCaptureCheckout}
              order={order}
              error={errorMessage}
              cart={cart}
              navigate={navigate}
              handleEmptyCart={handleEmptyCart}
              handleUpdateCartQty={handleUpdateCartQty}
              // createToken={createToken}
              // checkoutToken={checkoutToken}
            />
          }
        />
      </Routes>
      {/* </PRODUCT> */}
    </>
  )
}

export default Products
