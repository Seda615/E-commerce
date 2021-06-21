import {useHistory} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {isLoggedInSelector} from "../../../store/selectors";
import {setLoggedIn} from "../../../store/actions";
import AuthCtrl from "../../../controllers/auth";

const SignUp = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const history = useHistory();
	const dispatch = useDispatch();

	const isLoggedIn = useSelector(isLoggedInSelector);

	useEffect(() => {
		dispatch(setLoggedIn(false));
		localStorage.removeItem('token');
	}, []);


	useEffect(() => {
		if (isLoggedIn) {
			history.push('products');
		}
	}, [isLoggedIn]);

	const onSignUp = () => {
		if (password.length > 2 && login.length > 4 && password === confirmPassword) {
			AuthCtrl.signUp();
		} else {
			// TODO: Handle validations
			alert('Invalid username/password');
		}
	}

	return (
		<div className='sign'>
			<form>
				<div>
					Login: <input
					onChange={e => setLogin(e.target.value)}
					value={login}
				/>
				</div>
				<div>
					Password: <input
					onChange={e => setPassword(e.target.value)}
					value={password}
				/>
				</div>
				<div>
					Confirm Password: <input
					onChange={e => setConfirmPassword(e.target.value)}
					value={confirmPassword}
				/>
				</div>
				<button onClick={onSignUp}>Sign Up</button>
				<button onClick={() => {history.push('/signIn')}}>Go To Sign In</button>
			</form>
		</div>
	)
};

export default SignUp;
