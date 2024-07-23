import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import CartProduct from '../components/CartProduct'

const Cart = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-8'>
{cart.map(p => (
  <CartProduct product={p}></CartProduct>
))}
        </div>
      </div>
    </div>
  )
}

export default Cart
