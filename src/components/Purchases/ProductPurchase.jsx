import React from 'react'

const ProductPurchase = ({product}) => {
  return (
    <li className='card-purchase__item'>
      <h4 className='card-purchase__name'>{product.title}</h4>
      <div className='card-purchase__info'>
       <span className='card-purchase__quantity'><span className='card-purchase__span'>Quantity:</span>  {product.productsInCart.quantity}</span>
       <span className='card-purchase__price'><span className='card-purchase__span'>Price:</span> {product.price}</span>
      </div>
    </li>
  )
}

export default ProductPurchase 