import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import commerce from '../commerce'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import CartItem from './CartItem'

const useToken = function (cart) {
  const [Token, setToken] = useState(false)
  const loading = useRef(false)
  // const { id } = useParams()

  useEffect(() => {
    const generateToken = async () => {
      try {
        if (!cart || !cart.id || cart?.total_items <= 0 || !loading.current)
          return
        // debugger
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        })
        console.log(token)
        token && setToken(token)
      } catch (e) {
        loading.current = false
        console.log(e)
      }
    }
    // debugger
    if (!cart || !cart.id || cart?.total_items <= 0 || loading.current) return
    loading.current = true
    generateToken()
    return () => {}
  }, [cart])

  useEffect(
    (_) => {
      if (Token) loading.current = false
    },
    [Token]
  )

  return Token
}

const Checkout = ({
  cart,
  onCaptureCheckout,
  handleUpdateCartQty,
  handleRemoveFromCart,
  order,
  error,
}) => {
  // debugger
  const token = useToken(cart)
  // confirm address or shipping
  const [activePage, SetactivePage] = useState(0)
  const [shippingData, setShippingData] = useState({})

  const nextStep = () => SetactivePage((prevActiveStep) => prevActiveStep + 1)
  const backStep = () => SetactivePage((prevActiveStep) => prevActiveStep - 1)
  const test = (data) => {
    setShippingData(data)

    nextStep()
  }

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <h5 variant="h5">
            Thank you for your purchase, {order.customer.firstname}{' '}
            {order.customer.lastname}!
          </h5>
          <hr className={''} />
          <span variant="subtitle2">Order ref: {order.customer_reference}</span>
        </div>
        <hr />
        <Link to="/product">
          <button className="btn">Back to home</button>
        </Link>
      </>
    ) : (
      <div className={''}>loading.....</div>
    )

  if (error) {
    Confirmation = () => (
      <>
        <h5>Error: {error}</h5>
        <hr />
        <Link to="/product">
          <button className="btn">Back to home</button>
        </Link>{' '}
      </>
    )
  }

  const Form = (
    <>
      <AddressForm
        checkoutToken={token}
        nextStep={nextStep}
        setShippingData={setShippingData}
        test={test}
      />
      <PaymentForm
        checkoutToken={token}
        nextStep={nextStep}
        backStep={backStep}
        shippingData={shippingData}
        onCaptureCheckout={onCaptureCheckout}
      />
    </>
  )

  //   useEffect(() => {
  //     return () => {}
  //   }, [])

  return (
    <main className="w-full">
      <h2>Checkout</h2>
      <div className="flex w-full">
        <div className="">
          <div className="col-span-6">
            <span className=" text-xl">Checkout</span>
            {activePage === 0 ? token && <Form /> : <Confirmation />}
          </div>
        </div>
        <div className="">
          {cart && cart?.line_items?.map((product) => (
            <CartItem
              key={product.id}
              data={product}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

Checkout.displayName = 'Checkout'

export default React.memo(Checkout)
