import {
	PRODUCT_LIST_FAIL,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_REQUEST,
} from './types';
import axios from 'axios';

export const listProducts = () => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_LIST_REQUEST,
		});
		const res = await axios.get(`/api/products`);

		dispatch({
			type: PRODUCT_LIST_SUCCESS,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_FAIL,
			payload:
				error.response && error.response.data
					? error.response.data.message
					: error.message,
		} );
		
	}
};
