// import React, { useState, useEffect, useContext } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom'

// import commerce from '../commerce'
// import AddressForm from './AddressForm'
// import PaymentForm from './PaymentForm'
// import { PRODUCTCONTEXT } from '../contexts'
// import { CartList } from './CartList'
// import CartItem from './CartItem'

// const steps = ['Shipping address', 'Payment details']

// const Checkout = React.memo(
//   ({ onCaptureCheckout, order, error, checkoutToken, cart, createToken }) => {
//     const [activeStep, setActiveStep] = useState(0)
//     const [shippingData, setShippingData] = useState({})
//     // const navigate = useNavigate()
//     // const { id } = useParams()

//     const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
//     const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)
//     const test = (data) => {
//       setShippingData(data)

//       nextStep()
//     }

//     let Confirmation = () =>
//       order.customer ? (
//         <>
//           <div>
//             <h5 variant="h5">
//               Thank you for your purchase, {order.customer.firstname}{' '}
//               {order.customer.lastname}!
//             </h5>
//             <hr className={''} />
//             <span variant="subtitle2">
//               Order ref: {order.customer_reference}
//             </span>
//           </div>
//           <hr />
//           <Link to="/product">
//             <button className="btn">Back to home</button>
//           </Link>
//         </>
//       ) : (
//         <div className={''}>loading.....</div>
//       )

//     if (error) {
//       Confirmation = () => (
//         <>
//           <h5>Error: {error}</h5>
//           <hr />
//           <Link to="/product">
//             <button className="btn">Back to home</button>
//           </Link>{' '}
//         </>
//       )
//     }

//     const Form = () =>
//       activeStep === 0 ? (
//         <AddressForm
//           checkoutToken={checkoutToken}
//           nextStep={nextStep}
//           setShippingData={setShippingData}
//           test={test}
//         />
//       ) : (
//         <PaymentForm
//           checkoutToken={checkoutToken}
//           nextStep={nextStep}
//           backStep={backStep}
//           shippingData={shippingData}
//           onCaptureCheckout={onCaptureCheckout}
//         />
//       )

//     return (
//       <>
//         {/* <CssBaseline /> */}
//         {/* <div className={''} /> */}
//         <main className="grid grid-cols-12 ">
//           <div className="col-span-6">
//             <span className=" text-xl">Checkout</span>
//             <Stepper activeStep={activeStep} steps={steps} />
//             {activeStep === steps.length ? (
//               <Confirmation />
//             ) : (
//               checkoutToken &&
//                <Form />
//             )}
//           </div>

//           <div className="col-span-6">
//             <span variant="h4" align="center">
//               Checkout
//             </span>
//             {checkoutToken &&
//               checkoutToken?.line_items?.map((product) => (
//                 <CartItem key={product.id} data={product} />
//               ))}
//           </div>
//         </main>
//       </>
//     )
//   }
// )

// export default Checkout

// function Stepper({ activeStep, steps }) {
//   return (
//     <div className="flex items-center mx-8 text-base gap-4">
//       {steps.map((label, i) => (
//         <React.Fragment key={label}>
//           {i !== 0 && (
//             <div className="grow h-1 bg-primary rounded-lg relative">
//               <div
//                 className={
//                   'w-3 h-2 rounded-lg absolute bg-white top-[50%] -translate-y-1/2 transition duration-500' +
//                     activeStep ===
//                   i
//                     ? 'left-2'
//                     : 'left-2'
//                 }
//                />
//             </div>
//           )}
//           <div>
//             <span className="span">{label}</span>
//           </div>
//         </React.Fragment>
//       ))}
//     </div>
//   )
// }

// // useEffect(() => {

// //   if (id && !loading.state) {
// //     console.log(Date.now())
// //     const generateToken = async () => {
// //       try {
// //         // debugger
// //         setLoading({ ...loading, state: true })

// //         const token = await commerce.checkout.generateToken(id, {
// //           type: 'cart',
// //         })
// //         console.log(token)
// //         setLoading({ ...loading, state: false })
// //         setCheckoutToken(token)
// //       } catch (e) {
// //         console.error(e)
// //         setLoading({ ...loading, state: false })
// //       }
// //     }
// //     // debugger
// //      generateToken()
// //   }
// //   // else if(cart.id && !cart?.line_items.length) navigate('/product')
// //   // eslint-disable-next-line react-hooks/exhaustive-deps
// // }, [])
// // useEffect(() => {
// //   if(loading) return;

// //   if (cart.total_items > 0 ) {

// //     !loading && commerce.checkout.generateToken(cart.id, { type: 'cart' }).then(
// //       (checkout) => {
// //         setLoading(true)
// //         console.log(checkout)
// //       }).catch(
// //       (error) => {
// //         console.log('Error:', error)
// //       })
// //   } else {
// //     alert("Your cart is empty")
// //   }
// //   // const generateToken = async () =>{
// //   //   try {
// //   //     const token = await commerce.checkout.generateToken(cart.id,{type:'cart'})
// //   //     console.log(token)
// //   //     setCheckoutToken(token)
// //   //   } catch (error) {

// //   //   }
// //   // }
// //   // generateToken()
// //  },[])

// // useEffect(() => {
// //   if (cart?.id && !!cart?.line_items.length) {
// //     console.log(cart)
// //     const generateToken = async () => {
// //       try {
// //         // debugger
// //         const token = await commerce.checkout.generateToken(cart.id, {
// //           type: 'cart',
// //         })
// //         console.log(token)
// //         setCheckoutToken(token)
// //       } catch (e) {
// //         console.error(e)
// //         // if (activeStep !== steps.length) navigate('/500?reason=cart error ')
// //       }
// //     }

// //     generateToken()
// //   }
// //   // else if(cart.id && !cart?.line_items.length) navigate('/product')
// // }, [cart, activeStep, navigate])

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import commerce from '../commerce'

class Checkout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checkoutToken: {},
      // Customer details
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@email.com',
      // Shipping details
      shippingName: 'Jane Doe',
      shippingStreet: '123 Fake St',
      shippingCity: '',
      shippingStateProvince: '',
      shippingPostalZipCode: '',
      shippingCountry: '',
      // Payment details
      cardNum: '4242 4242 4242 4242',
      expMonth: '11',
      expYear: '2023',
      ccv: '123',
      billingPostalZipcode: '',
      // Shipping and fulfillment data
      shippingCountries: {},
      shippingSubdivisions: {},
      shippingOptions: [],
      shippingOption: '',
    }

    this.handleFormChanges = this.handleFormChanges.bind(this)
    this.handleShippingCountryChange =
      this.handleShippingCountryChange.bind(this)
    this.handleSubdivisionChange = this.handleSubdivisionChange.bind(this)
    this.handleCaptureCheckout = this.handleCaptureCheckout.bind(this)
  }

  componentDidMount() {
    this.generateCheckoutToken()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.shippingCountry !== prevState.shippingCountry) {
      this.fetchShippingOptions(
        this.state.checkoutToken.id,
        this.state.shippingCountry
      )
    }
  }

  sanitizedLineItems(lineItems) {
    return lineItems.reduce((data, lineItem) => {
      const item = data
      let variantData = null
      if (lineItem.selected_options.length) {
        variantData = {
          [lineItem.selected_options[0].group_id]:
            lineItem.selected_options[0].option_id,
        }
      }
      item[lineItem.id] = {
        quantity: lineItem.quantity,
        variants: variantData,
      }
      return item
    }, {})
  }

  /**
   *  Generates a checkout token
   *  https://commercejs.com/docs/sdk/checkout#generate-token
   */
  generateCheckoutToken() {
    const { cart } = this.props
    if (cart.line_items.length) {
      return commerce.checkout
        .generateToken(cart.id, { type: 'cart' })
        .then((token) => this.setState({ checkoutToken: token }))
        .then(() => this.fetchShippingCountries(this.state.checkoutToken.id))
        .catch((error) => {
          console.log('There was an error in generating a token', error)
        })
    }
  }

  /**
   * Fetches a list of countries available to ship to checkout token
   * https://commercejs.com/docs/sdk/checkout#list-available-shipping-countries
   *
   * @param {string} checkoutTokenId
   */
  fetchShippingCountries(checkoutTokenId) {
    commerce.services
      .localeListShippingCountries(checkoutTokenId)
      .then((countries) => {
        this.setState({
          shippingCountries: countries.countries,
        })
      })
      .catch((error) => {
        console.log(
          'There was an error fetching a list of shipping countries',
          error
        )
      })
  }

  /**
   * Fetches the subdivisions (provinces/states) for a country
   * https://commercejs.com/docs/sdk/checkout#list-all-subdivisions-for-a-country
   *
   * @param {string} countryCode
   */
  fetchSubdivisions(countryCode) {
    commerce.services
      .localeListSubdivisions(countryCode)
      .then((subdivisions) => {
        this.setState({
          shippingSubdivisions: subdivisions.subdivisions,
        })
      })
      .catch((error) => {
        console.log('There was an error fetching the subdivisions', error)
      })
  }

  /**
   * Fetches the available shipping methods for the current checkout
   * https://commercejs.com/docs/sdk/checkout#get-shipping-methods
   *
   * @param {string} checkoutTokenId
   * @param {string} country
   * @param {string} stateProvince
   */
  fetchShippingOptions(checkoutTokenId, country, stateProvince = null) {
    commerce.checkout
      .getShippingOptions(checkoutTokenId, {
        country: country,
        region: stateProvince,
      })
      .then((options) => {
        // Pre-select the first available method
        const shippingOption = options[0] || null
        this.setState({
          shippingOption: shippingOption,
          shippingOptions: options,
        })
      })
      .catch((error) => {
        console.log('There was an error fetching the shipping methods', error)
      })
  }

  handleFormChanges(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleShippingCountryChange(e) {
    const currentValue = e.target.value
    this.fetchSubdivisions(currentValue)
  }

  handleSubdivisionChange(e) {
    const currentValue = e.target.value
    this.fetchShippingOptions(
      this.state.checkoutToken.id,
      this.state.shippingCountry,
      currentValue
    )
  }

  handleCaptureCheckout(e) {
    const { cart } = this.props
    e.preventDefault()
    const orderData = {
      line_items: this.sanitizedLineItems(cart.line_items),
      customer: {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        email: this.state.email,
      },
      shipping: {
        name: this.state.shippingName,
        street: this.state.shippingStreet,
        town_city: this.state.shippingCity,
        county_state: this.state.shippingStateProvince,
        postal_zip_code: this.state.shippingPostalZipCode,
        country: this.state.shippingCountry,
      },
      fulfillment: {
        shipping_method: this.state.shippingOption.id,
      },
      payment: {
        gateway: 'test_gateway',
        card: {
          number: this.state.cardNum,
          expiry_month: this.state.expMonth,
          expiry_year: this.state.expYear,
          cvc: this.state.ccv,
          postal_zip_code: this.state.shippingPostalZipCode,
        },
      },
    }
    this.props.onCaptureCheckout(this.state.checkoutToken.id, orderData)
    this.props.navigate('/confirmation')
  }

  renderCheckoutForm() {
    const { shippingCountries, shippingSubdivisions, shippingOptions } =
      this.state

    return this.Form(shippingCountries, shippingSubdivisions, shippingOptions)
  }

  Form(shippingCountries, shippingSubdivisions, shippingOptions) {
    return (
      <form
        className="checkout__form grid grid-cols-12"
        onChange={this.handleFormChanges}
      >
        <h4 className="checkout__subheading col-span-12">
          Customer information
        </h4>

        <div className="col-span-6">
          <label className="checkout__label" htmlFor="firstName">
            First name
          </label>
          <input
            className="checkout__input"
            type="text"
            onChange={this.handleFormChanges}
            value={this.state.firstName}
            name="firstName"
            placeholder="Enter your first name"
            required
          />
        </div>

        <div className="col-span-6">
          <label className="checkout__label" htmlFor="lastName">
            Last name
          </label>
          <input
            className="checkout__input"
            type="text"
            onChange={this.handleFormChanges}
            value={this.state.lastName}
            name="lastName"
            placeholder="Enter your last name"
            required
          />
        </div>

        <div className="col-span-12">
          <label className="checkout__label" htmlFor="email">
            Email
          </label>
          <input
            className="checkout__input "
            type="text"
            onChange={this.handleFormChanges}
            value={this.state.email}
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <h4 className="checkout__subheading">Shipping details</h4>

        <div className="col-span-6">
          <label className="checkout__label" htmlFor="shippingName">
            Full name
          </label>
          <input
            className="checkout__input"
            type="text"
            onChange={this.handleFormChanges}
            value={this.state.shippingName}
            name="shippingName"
            placeholder="Enter your shipping full name"
            required
          />
        </div>

        <div className="col-span-6">
          <label className="checkout__label" htmlFor="shippingStreet">
            Street address
          </label>
          <input
            className="checkout__input"
            type="text"
            onChange={this.handleFormChanges}
            value={this.state.shippingStreet}
            name="shippingStreet"
            placeholder="Enter your street address"
            required
          />
        </div>

        <div className="col-span-6">
          <label className="checkout__label" htmlFor="shippingCity">
            City
          </label>
          <input
            className="checkout__input"
            type="text"
            onChange={this.handleFormChanges}
            value={this.state.shippingCity}
            name="shippingCity"
            placeholder="Enter your city"
            required
          />
        </div>

        <div className="col-span-6">
          <label className="checkout__label" htmlFor="shippingPostalZipCode">
            Postal/Zip code
          </label>
          <input
            className="checkout__input"
            type="text"
            onChange={this.handleFormChanges}
            value={this.state.shippingPostalZipCode}
            name="shippingPostalZipCode"
            placeholder="Enter your postal/zip code"
            required
          />
        </div>

        <div className="col-span-6">
          <label className="checkout__label" htmlFor="shippingCountry">
            Country
          </label>
          <select
            value={this.state.shippingCountry}
            name="shippingCountry"
            onChange={this.handleShippingCountryChange}
            className="checkout__select"
          >
            <option disabled>Country</option>
            {Object.keys(shippingCountries).map((index) => {
              return (
                <option value={index} key={index}>
                  {shippingCountries[index]}
                </option>
              )
            })}
            ;
          </select>
        </div>
        <div className="col-span-6">
          <label className="checkout__label" htmlFor="shippingStateProvince">
            State/province
          </label>
          <select
            value={this.state.shippingStateProvince}
            name="shippingStateProvince"
            onChange={this.handleSubdivisionChange}
            className="checkout__select"
          >
            <option className="checkout__option" disabled>
              State/province
            </option>
            {Object.keys(shippingSubdivisions).map((index) => {
              return (
                <option value={index} key={index}>
                  {shippingSubdivisions[index]}
                </option>
              )
            })}
            ;
          </select>
        </div>
        <div className="col-span-6">
          <label className="checkout__label" htmlFor="shippingOption">
            Shipping method
          </label>
          <select
            value={this.state.shippingOption.id}
            name="shippingOption"
            onChange={this.handleFormChanges}
            className="checkout__select"
          >
            <option className="checkout__select-option" disabled>
              Select a shipping method
            </option>
            {shippingOptions.map((method, index) => {
              return (
                <option
                  className="checkout__select-option"
                  value={method.id}
                  key={index}
                >{`${method.description} - $${method.price.formatted_with_code}`}</option>
              )
            })}
            ;
          </select>
        </div>

        <h4 className="checkout__subheading">Payment information</h4>

        <div className="col-span-6">
          <label className="checkout__label" htmlFor="cardNum">
            Credit card number
          </label>
          <input
            className="checkout__input"
            type="text"
            name="cardNum"
            onChange={this.handleFormChanges}
            value={this.state.cardNum}
            placeholder="Enter your card number"
          />
        </div>
        <div className="col-span-6">
          <label className="checkout__label" htmlFor="expMonth">
            Expiry month
          </label>
          <input
            className="checkout__input"
            type="text"
            name="expMonth"
            onChange={this.handleFormChanges}
            value={this.state.expMonth}
            placeholder="Card expiry month"
          />
        </div>
        <div className="col-span-6">
          <label className="checkout__label" htmlFor="expYear">
            Expiry year
          </label>
          <input
            className="checkout__input"
            type="text"
            name="expYear"
            onChange={this.handleFormChanges}
            value={this.state.expYear}
            placeholder="Card expiry year"
          />
        </div>
        <div className="col-span-6">
          <label className="checkout__label" htmlFor="ccv">
            CCV
          </label>
          <input
            className="checkout__input"
            type="text"
            name="ccv"
            onChange={this.handleFormChanges}
            value={this.state.ccv}
            placeholder="CCV (3 digits)"
          />
        </div>
        <button
          onClick={this.handleCaptureCheckout}
          className="checkout__btn-confirm"
        >
          Confirm order
        </button>
      </form>
    )
  }

  renderCheckoutSummary() {
    const { cart } = this.props
    console.log(cart)
    return (
      <>
        <div className="checkout__summary">
          <h4>Order summary</h4>
          {cart.line_items.map((lineItem) => (
            <>
              <div key={lineItem?.id} className="checkout__summary-details">
                <img
                  className="checkout__summary-img"
                  src={lineItem?.image.url}
                  alt={lineItem?.name}
                />
                <p className="checkout__summary-name">
                  {lineItem?.quantity} x {lineItem?.name}
                </p>
                <p className="checkout__summary-value">
                  {lineItem?.line_total.formatted_with_symbol}
                </p>
              </div>
            </>
          ))}
          <div className="checkout__summary-total">
            <p className="checkout__summary-price">
              <span>Subtotal:</span>
              {cart.subtotal.formatted_with_symbol}
            </p>
          </div>
        </div>
      </>
    )
  }

  render() {
    return (
      <div className="checkout">
        <h2 className="">Checkout</h2>
        <div className="flex flex-col justify-center">
          {this.renderCheckoutForm()}
          {this.renderCheckoutSummary()}
        </div>
      </div>
    )
  }
}

export default Checkout

Checkout.propTypes = {
  cart: PropTypes.object,
  navigate: PropTypes.func,
  onCaptureCheckout: () => {},
}
