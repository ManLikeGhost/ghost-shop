import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	CART_ITEM_REQUEST,
} from '../actions/types';

const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const initialState = {
	loading: null,
	cartItems: cartItemsFromStorage,
	error: null,
};


export const cartReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ITEM_REQUEST:
			return {
				...state,
				loading: true,
				cartItems: [],
			};
		case CART_ADD_ITEM:
			const item = payload;
			const ifItemExist = state.cartItems.find(
				(x) => x.product === item.product
			);

			if (ifItemExist) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === ifItemExist.product ? item : x
					),
				};
			} else {
				return { 
					...state,
					loading: false,
					cartItems: [...state.cartItems, item],
				};
			}

		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(x => x.product !== action.payload)
			}

		default:
			return state;
	}
};
