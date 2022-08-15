import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './productItem'

const ProductsList = ({ products,handleAddToCart }) => {
  return (
    <div className="grid grid-cols-12 gap-4 py-4 px-4" id="products">
      {products.map((product) => (
        <ProductItem key={product.id} data={product} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.array,
}

export default ProductsList
