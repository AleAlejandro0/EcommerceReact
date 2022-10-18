import React from 'react'

const InputSearch = ({setInputSearch}) => {

  const getInputValue = e => {
    setInputSearch(e.target.value.trim())
  }
  
  return (
    <div className='input__container'>
      <input className='input__seach' onChange={getInputValue} type="text" placeholder='Search product'/>
    </div>
  )
}

export default InputSearch