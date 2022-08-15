import React from 'react';

const Review = ({ checkoutToken }) => (
  <>
    <span className ='mb-4' variant="h6" gutterBottom>Order summary</span>
    <ul >
      {checkoutToken.live.line_items.map((product) => (
        <li style={{ padding: '10px 0' }} key={product.name}>
          <span>{product.name} Quantity: {product.quantity} </span>
          <span variant="body2">{product.line_total.formatted_with_symbol}</span>
        </li>
      ))}
      <li style={{ padding: '10px 0' }}>
        <span >Total</span>
        <span variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </span>
      </li>
    </ul>
  </>
);

export default Review;
