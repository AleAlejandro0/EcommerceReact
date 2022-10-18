import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../ProductDetail/ProductDescription'
import SimilarProducts from '../ProductDetail/SimilarProducts'

const ProductDetail = () => {

  const [productInfo, setProductInfo] = useState()

  const {id} = useParams()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
         .then(res => setProductInfo(res.data.data.product))
         .catch(err => console.log(err))
  }, [])

  return (
  <div className='product__details-container'>
    <div className='product__details'>
      <ProductDescription 
        productInfo={productInfo}
      />
      <SimilarProducts
       productInfo={productInfo}
      />
    </div>
  </div>
  )
}

export default ProductDetail