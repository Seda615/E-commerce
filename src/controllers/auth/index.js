import {setLoggedIn} from '../../store/actions';
import store from '../../store';

const AuthCtrl = {};

const username1 = 'Admin';
const password1 = '123';
const token = 'asdasd123123sadae12313ads';

AuthCtrl.checkLoginStatus = () => {
	setTimeout(() => {
		const token = localStorage.getItem('token');

		if (token) {
			store.dispatch(setLoggedIn(true));
		} else {
			store.dispatch(setLoggedIn(false));
		}
	}, 2000);
};

AuthCtrl.signIn = (username, password) => {
	if (username === username1 && password === password1) {
		localStorage.setItem('token', token);

		store.dispatch(setLoggedIn(true));
		console.log('token')
	} else {
		// TODO: Handle validations
		alert('Invalid username/password');
	}
};


AuthCtrl.signUp = () => {
	localStorage.setItem('token', token);
	store.dispatch(setLoggedIn(true));
};

export default AuthCtrl;
