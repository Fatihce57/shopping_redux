import { data } from '../../data/data';

const INITIAL_STATE = {
    bookList: data,
    cart: []
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEPETE_EKLE':
            return { ...state, cart: [...state.cart, action.payload] };
        default:
            return state;
    }

};