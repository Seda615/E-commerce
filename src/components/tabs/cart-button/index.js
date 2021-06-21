import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import React from 'react';

const CartButton = () => {

	const cartItems = useSelector((state) => (
		state.cartItems
	));

	const itemsCount = cartItems.reduce((count, item) => (count + item.count), 0);

	return (
		<>
			<Link to='/cart'>Cart</Link>
			<span> {itemsCount}</span>
		</>
	)
};

export default CartButton;
