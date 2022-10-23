import React from 'react'

const InputSearch = ({setInputSearch, setFilterProduct}) => {

  const getInputValue = e => {
    setInputSearch(e.target.value.trim())
    setFilterProduct(null)
  }
  
  return (
    <div className='input__container'>
      <input className='input__seach' onChange={getInputValue} type="text" placeholder='Search product'/>
    </div>
  )
}

export default InputSearch