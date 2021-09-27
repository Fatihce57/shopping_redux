import { data } from '../../data/data'
import { combineReducers } from 'redux'

const INITIAL_STATE = {
    bookList: data,
    cart: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.payload] }

        case 'REMOVE_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };

        default:
            return state
    }
}
