import React, { useContext } from 'react'
import {CartContext} from "../Features/ContextProvider"

const Product = ({product}) => {
    const {dispatch} = useContext(CartContext)
  return (
    <div className='col' >
    <div class="card h-90" >
    <h5 class="d-flex flex-row-reverse p-2">${product.price}</h5>
    <img class="card-img-top h-45" src={product.thumbnail} alt="Card image cap" />
    <div class="card-body">
      <h4 class="card-title">{product.title}</h4>
      <p>{product.description}</p>
      <button class="btn btn-primary" onClick={() =>  dispatch(
        { type:"Add" , product:product}
      )}>Add to Cart</button>
    </div>
  </div>
  </div>
  )
}

export default Product
