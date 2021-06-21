import {productsSelector} from '../../../store/selectors';
import Loading from '../../../components/shared/loading';
import ProductsCtrl from '../../../controllers/products';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../../store/actions';
import React, {useEffect} from 'react';

const Products = () => {

	const products = useSelector(productsSelector);

	const dispatch = useDispatch();

	useEffect(() => {
		ProductsCtrl.getProducts();
	}, [])

	if (products === null) {
		return <Loading/>;
	}

	return (
		<div className='container'>
			<div className='products'>
				{products.map(product => (
					<div key={product.id} className='product'>
						<img src={product.imageUrl} alt="#"/>
						<h5>{product.title}</h5>
						<p>{product.description}</p>
						<button onClick={() => {
							dispatch(addToCart(product))
						}}>
							Add to cart
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Products;
