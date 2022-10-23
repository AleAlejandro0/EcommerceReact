import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../utils/getConfig'
import '../../product.css'
import Carrousel from './Carrousel'

const ProductDescription = ({ productInfo }) => {

  const [counter, setCounter] = useState(1)

  const counterPlus = () => setCounter(counter + 1)
  const counterMinus = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1)
    }
  }

  const handleAddCart = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      id: productInfo.id,
      quantity: counter
    }
    axios.post(URL, obj, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <section className='product-info'>
      <Carrousel
        productInfo={productInfo}
      />
      <div className='product-description__container'>
        <h2 className='product-info__name'>{productInfo?.title}</h2>
        <p className='product-info__description'>{productInfo?.description}</p>
        <div className='product-info__body'>
          <article className='product-info__price'>
            <h3 className='product-info__price-label'>Price</h3>
            <span className='product-info__price-value'>{productInfo?.price}</span>
          </article>
          <article className='product-info__quantity'>
            <h3 className='product-info__quantity-label'>Quantity</h3>
            <div className='product-info__container'>
              <button className='product-info-btn' onClick={counterMinus}>-</button>
              <div className='quantity-counter'>{counter}</div>
              <button className='product-info-btn' onClick={counterPlus}>+</button>
            </div>
          </article>
        </div>
        <div className='product-info__btn'>
          <button onClick={handleAddCart} className='product-info__btn-cart'>Add to cart</button>
        </div>
      </div>
    </section>
  )
}

export default ProductDescription