import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../Home/CardHome'

const SimilarProducts = ({productInfo}) => {
   
 const [filterProducts, setFilterProducts] = useState()
 const products = useSelector( state => state.products)

 useEffect(() => {
   if(productInfo){
    const filter = products?.filter( p => p.category.name === productInfo.category )
    setFilterProducts(filter)
   }
 }, [productInfo])

  return (
   <>
    <h3 className='similar__products-description'>Products you may be interested in:</h3>
    <div className='similar__products'>
      {
        filterProducts?.map( product => {
          if(product.title !== productInfo.title){
             return <CardHome
              key={product.id}
              product={product}
             />
          }

        })
      }
    </div>
   </>
  )
}

export default SimilarProducts