import React from 'react'
import { useDispatch} from 'react-redux'
import { getAllProducts} from '../../store/slices/products.slice'

const InputSearch = ({setInputSearch}) => {

  const dispatch = useDispatch()

  const getInputValue = e => {
    dispatch(getAllProducts())
    setInputSearch(e.target.value.trim())
  }
  
  return (
    <div className='input__container'>
      <input className='input__seach' onChange={getInputValue} type="text" placeholder='Search product'/>
    </div>
  )
}

export default InputSearch