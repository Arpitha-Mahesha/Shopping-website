import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'

const CartProduct = ({product}) => {
  const {dispatch} = useContext(CartContext)
  return (
    <div className='d-flex border mb-4'>
        <img src={product.thumbnail} className='w-25 h-25' alt=""/>
      <div className='detail ms-4'>
<h4>{product.title}</h4>
<h4>{product.price}</h4>
<button className='btn btn-sm btn-warning' onClick={()=> dispatch({type:"Remove", id: product.id})}>Remove</button>
      </div>
    </div>
  )
}

export default CartProduct
