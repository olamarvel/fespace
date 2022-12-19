import React from 'react'
// import { PRODUCTCONTEXT } from '../contexts'

const CartItem = ({ data, handleUpdateCartQty, handleRemoveFromCart }) => {
  // console.log(data)
  // const handleUpdateCartQty = (lineItemId, newQuantity) =>
  //   onUpdateCartQty(lineItemId, newQuantity)

  // const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId)

  // const { result } = stripHtml(data?.description)
  // const { handleUpdateCartQty, handleRemoveFromCart } =
  //   useContext(PRODUCTCONTEXT)
  const updateCart = (ItemId, newQuantity) =>
    handleUpdateCartQty(ItemId, newQuantity)
  const removeItem = (ItemId) => handleRemoveFromCart(ItemId)

  const render = (
    <div className="col-span-12 sm:col-span-4 lg:col-span-4 xl:col-span-3 2xl:col-span-1 card">
      <img className="w-full h-96" src={data?.image?.url} alt={data?.name} />
      <div className="flex flex-col justify-around border-t-2 border-t-primary">
        <div className="flex flex-wrap justify-between items-center mt-4">
          <h2 className="mt-4">{data?.name}</h2>
          {/* <span className="text-sm w-fit">{result}</span> */}
          <span className=" span">{data?.price.formatted_with_symbol}</span>
        </div>
        <div className="flex flex-wrap justify-between items-center my-4">
          <div className="w-fit flex items-center ">
            <button
              type="button"
              onClick={() => updateCart(data.id, data.quantity - 1)}
              className="text-lg rounded p-3 shadow-card w-8 h-8 mx-2 flex justify-center items-center"
            >
              -
            </button>
            <span className='span text-lg'>{data.quantity}</span>
            <button
              type="button"
              size="small"
              onClick={() => updateCart(data.id, data.quantity + 1)}
              className="text-lg rounded p-3 shadow-card w-8 h-8 mx-2 flex justify-center items-center"
            >
              +
            </button>
          </div>
          <button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => removeItem(data.id)}
            className='btn'
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )

  return render
}

export default CartItem
