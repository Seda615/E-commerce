import {setProducts} from '../../store/actions';
import store from '../../store';

const ProductsCtrl = {};

const products = [
	{
		id: 1,
		title: 'some title 1',
		description: 'description 1',
		imageUrl: 'src/assets/images/products/black.jpg'
	},
	{
		id: 2,
		title: 'some title 2',
		description: 'description 2',
		imageUrl: 'src/assets/images/products/blue.jpg'
	},
	{
		id: 3,
		title: 'some title 3',
		description: 'description 3',
		imageUrl: 'src/assets/images/products/grey.png'
	},
	{
		id: 4,
		title: 'some title 4',
		description: 'description 4',
		imageUrl: 'src/assets/images/products/happy-tshirt-1.jpg'
	},
	{
		id: 5,
		title: 'some title 5',
		description: 'description 5',
		imageUrl: 'src/assets/images/products/pink.jpg'
	},
	{
		id: 6,
		title: 'some title 6',
		description: 'description 6',
		imageUrl: 'src/assets/images/products/yellow.jpg'
	}
];

ProductsCtrl.getProducts = () => {
	setTimeout(() => {
		store.dispatch(setProducts(products));
	}, 1000);
};

export default ProductsCtrl;
