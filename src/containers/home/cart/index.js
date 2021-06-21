import {deleteItemFromCart, removeFromCart} from '../../../store/actions';
import {cartItemsSelector} from '../../../store/selectors';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';

const Cart = () => {

	const cartItems = useSelector(cartItemsSelector);

	const dispatch = useDispatch();

	if (cartItems.length === 0) {
		return (
			<div>
				Cart is empty!
			</div>
		)
	}

	return (
		<div className='container'>
			<div className='products'>
				{cartItems.map(item => (
					<div key={item.id} className='product'>
						<img src={item.imageUrl} alt='#'/>
						<h5>{item.title}</h5>
						<p>{item.description}</p>
						<p>Count: {item.count}</p>
						<button onClick={() => {
							dispatch(deleteItemFromCart(item))
						}}>
							Delete Item
						</button>
						<button onClick={() => {
							dispatch(removeFromCart(item))
						}}>
							Remove item from cart
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cart;
