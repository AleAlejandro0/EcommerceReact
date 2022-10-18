import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardHome from '../Home/CardHome'
import CategoryFilter from '../Home/CategoryFilter'
import InputSearch from '../Home/InputSearch'
import PriceFilter from '../Home/PriceFilter'

const Home = () => {

 const [inputSearch, setInputSearch] = useState('')
 const [filterProduct, setFilterProduct] = useState()
 const [filterByPrice, setFilterByPrice] = useState({})
 const [showFilters, setShowFilters] = useState(false)

 const products =  useSelector(state => state.products)
 
//Filter by Search 
 useEffect(() => {
  if(inputSearch.length !== 0 ){
   const filter = products?.filter( e => e.title.toLowerCase().includes(inputSearch.toLowerCase()))
    setFilterProduct(filter)
  }else{
    setFilterProduct(null)
  }
 }, [inputSearch])

 
 useEffect(() => {
//IF FILTER BY PRICE VALUE IS SUBMITED  
 if(filterByPrice.fromSubmitted || filterByPrice.toSubmitted){
  const filter = products?.filter(p => {
    const price = +p.price 
    const min = filterByPrice.fromSubmitted
    const max = filterByPrice.toSubmitted
   
  if(min && max){
    return price >= min  && price <= max
  }else if(min && !max){
    return price >= min
  }else if(!min && max){
    return price <= max
  }else{
   return true
  }
  })
  setFilterProduct(filter)
 }
 }, [filterByPrice.fromSubmitted, filterByPrice.toSubmitted, filterByPrice])

 // FILTER SHOW - HIDE BUTTON 
 const tongleFilter = () => showFilters ? setShowFilters(false) : setShowFilters(true) 

 console.log(filterProduct)

  return (
    <div className='home'>
      <InputSearch
        setInputSearch={setInputSearch}
      /> 
      {
       showFilters ?
       <div className='home__filters'>
         <button className='home__filters-close'><i className="fa-regular fa-circle-xmark" onClick={tongleFilter}></i></button>
         <span className='home__filter__title'>Filters:</span>
         <CategoryFilter
          setFilterProduct={setFilterProduct}
         />
         <PriceFilter
           setFilterByPrice={setFilterByPrice}
         />
        </div>
       :
        null
      }
      <button className='home__filters-show' onClick={tongleFilter}> Filters </button>

      <div className='home__container-card'>
        {
         filterProduct ? 
          filterProduct.map(product => (
            <CardHome
             key={product.id}
             product={product}
            />
          ))
        : 
         products?.map(product => (
           <CardHome
             key={product.id}
             product={product}
           />
         ))
        }
      </div>
    </div>
  )
}

export default Home