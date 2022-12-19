import React from 'react'
import { stripHtml } from 'string-strip-html'
import { faCartPlus } from '../icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductItem = ({ data,handleAddToCart }) => {
  const { result } = stripHtml(data?.description)
  // const { handleAddToCart } = useContext(PRODUCTCONTEXT)
  const addToCart = () => handleAddToCart(data.id, 1)
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-3 xl:col-span-2 2xl:col-span-1 card">
      <img className="w-full h-96" src={data?.image?.url} alt={data?.name} />
      <div className="flex flex-col justify-around border-t-2 border-t-primary">
        <h2 className="mt-4">{data?.name}</h2>
        <div className="flex flex-wrap justify-between items-center mt-4">
          <p className="text-sm w-fit">{result}</p>
          <p className=" span">{data?.price.formatted_with_symbol}</p>
        </div>
        <div className="flex flex-wrap justify-between items-center my-4">
          <button className="btn"> View Product</button>
          <FontAwesomeIcon
            icon={faCartPlus}
            className="span w-6 h-6 hover:text-primary"
            onClick={addToCart}
          />
        </div>
      </div>
    </div>
  ) 
}

export default ProductItem
