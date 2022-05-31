import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_ITEM_REQUEST } from './types';

export const addToCart = (id, qty) => async (dispatch, getState) => {
	dispatch({
		type: CART_ITEM_REQUEST,
	});

	const { data } = await axios.get(`/api/products/${id}`);

	try {
		dispatch({
			type: CART_ADD_ITEM,
			payload: {
				product: data._id,
				name: data.name,
				image: data.image,
				price: data.price,
				countInStock: data.countInStock,
				qty,
			},
		});
		localStorage.setItem(
			'cartItems',
			JSON.stringify(getState().cart.cartItems)
		);
	} catch (error) {}
};
