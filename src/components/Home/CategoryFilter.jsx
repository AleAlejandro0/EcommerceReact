import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { getAllProducts, getProductByCategory } from '../../store/slices/products.slice'
import getConfig from '../../utils/getConfig'

const CategoryFilter = ({setFilterProduct, setEmpty}) => {

 const [itemCategory, setItemCategory ] = useState()

 useEffect(() => {
   const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
   axios.get(URL, getConfig())
     .then(res => setItemCategory(res.data.data.categories))
     .catch(err => console.log(err))
 }, [])

 const dispatch = useDispatch()

 const categoryFilter = id => {
   dispatch(getProductByCategory(id)) 
   setFilterProduct(null)
   setEmpty(false)
 }

 const requestAllProducts = () => {
   dispatch(getAllProducts())
   setEmpty(false)
 }

  return (
    <div className='category'>
      <h3 className='category__title'>Category</h3>
      <ul className='category__ul'>
        <li className='category__li' onClick={requestAllProducts}>All products</li>
        {
         itemCategory?.map( item => (
            <li className='category__li' onClick={() => {categoryFilter(item.id)}} key={item.id}>{item.name}</li>
         ))
        }
      </ul>
    </div>
  )
}

export default CategoryFilter