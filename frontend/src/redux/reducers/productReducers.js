import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
} from '../actions/types';

const initialState = {
	loading: null,
	products: [],
	error: null,
};

export const productListReducer = (state = initialState, action) => {
	const { payload, type } = action;

	switch (type) {
		case PRODUCT_LIST_REQUEST:
			return {
				loading: true,
				products: [],
			};

		case PRODUCT_LIST_SUCCESS:
			return {
				loading: false,
				products: payload,
			};

		case PRODUCT_LIST_FAIL:
			return {
				loading: false,
				error: payload,
			};
		default:
			return state;
	}
};
