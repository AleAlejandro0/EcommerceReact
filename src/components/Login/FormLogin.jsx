import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import menuOptions from '../../menuOptions.css'

const FormLogin = () => {

  const { register, handleSubmit, reset } = useForm()

  const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.data.token)
      })
      .catch(err => console.log(err))
     reset({
       email: "",
       password: ""
     })
  }

  return (
    <form className='login__form' onSubmit={handleSubmit(submit)}>
      <h2 className='login__title'>Welcome</h2>
      <div className='login__test_data'>
        <h3 className='login__test_data-title'>Test data</h3>
        <ul className='login__test_data-ul'>
          <li className='login__test-data-item'><i className="fa-regular fa-envelope" id='email-test'></i>john@gmail.com</li>
          <li className='login__test-data-item'><i className="fa-solid fa-unlock" id='password-test'></i>john1234</li>
        </ul>
      </div>
      <div className='login__item'>
        <label className='login__label' htmlFor="email">Email</label>
        <input
          {...register('email')}
          className='login__input'
          type="email" id='email'
        />
      </div>
      <div className='login__item'>
        <label className='login__label' htmlFor="password">Password</label>
        <input
          {...register('password')}
          className='login__input'
          type="password" id="password"
        />
      </div>
      <button className='login__btn'>Submit</button>
    </form>
  )
}

export default FormLogin