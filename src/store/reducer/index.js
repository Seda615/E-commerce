import * as actionTypes from '../action-types';
import Utility from '../../helpers/utility';

const initialState = {
	isLoggedIn: null,
	products: null,
	cartItems: []
};

const reducer = (state = initialState, action) => {
	const {type, payload} = action;

	switch (type) {
		case actionTypes.SET_LOGGED_IN: {
			return {
				...state,
				isLoggedIn: payload
			};
		}
		case actionTypes.SET_PRODUCTS: {
			return {
				...state,
				products: payload
			};
		}
		case actionTypes.ADD_TO_CART: {
			const cartItems = Utility.deepClone(state.cartItems);
			const i = cartItems.findIndex((item) => (item.id === payload.id));
			if (i === -1) {
				payload.count = 1;
				cartItems.push(payload);
			} else {
				cartItems[i].count++;
			}

			return {
				...state,
				cartItems
			};
		}
		case actionTypes.REMOVE_FROM_CART: {
			const cartItems = Utility.deepClone(state.cartItems);
			const i = cartItems.findIndex((item) => (item.id === payload.id));

			if (i !== -1) {
				if (cartItems[i].count > 1) {
					cartItems[i].count--;
				} else {
					cartItems.splice(i, 1);
				}
			}

			return {
				...state,
				cartItems
			};
		}
		case actionTypes.DELETE_ITEM_FROM_CART: {
			const cartItems = Utility.deepClone(state.cartItems);
			const i = cartItems.findIndex((item) => (item.id === payload.id));

			if (i !== -1) {
				cartItems.splice(i, 1);
			}

			return {
				...state,
				cartItems
			};
		}
		default: {
			return state;
		}
	}
};

export default reducer;
