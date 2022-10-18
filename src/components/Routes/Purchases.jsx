import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import PurchaseCard from '../Purchases/PurchaseCard'

const Purchases = () => {

  const [purchases, setPurchases ] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='purchase'>
      <h2 className='purchase__title'>Purchases</h2>
      <div className="purchase__container">
       {
         purchases?.map(purchase => (
           <PurchaseCard
            key={purchase.id}
            purchase={purchase}
           />
         ))
       }
      </div>
    </div>
  )
}

export default Purchases