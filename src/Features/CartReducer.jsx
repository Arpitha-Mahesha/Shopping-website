import React from 'react'

const CartReducer = (state, action) => {
switch (action.type) {
    case "Add":
        return [...state, action.product]
    case "Remove":
        return state.filter (p => p.id !== action.id)

    default:
        state;
}
}

export default CartReducer
