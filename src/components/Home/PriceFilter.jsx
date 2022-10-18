import React from 'react'

const PriceFilter = ({setFilterByPrice}) => {

  const filterPrice = e => {
    e.preventDefault()
    const obj = {
     fromSubmitted: Number(e.target.from.value),
     toSubmitted: Number(e.target.to.value)
    }
    setFilterByPrice(obj)
    e.target.from.value = ''
    e.target.to.value= ''
  }
  return (
    <form  className='price' onSubmit={filterPrice} >
      <h3 className='price__title'>Price</h3>
      <ul className='price__ul'>
        <li className='price__li'>
          <label className='price__label' htmlFor="from">From</label>
          <input className='price__input' type="number" id='from' />
        </li>
        <li className='price__li price__li2'>
          <label className='price__label' htmlFor="to">To</label>
          <input className='price__input price__input2' type="number" id='to'/>
        </li>
      </ul>
      <button className='price__btn'>Filter</button>
    </form>
  )
}

export default PriceFilter