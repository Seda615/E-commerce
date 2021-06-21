import {isLoggedInSelector} from '../../../store/selectors';
import AuthCtrl from '../../../controllers/auth';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

const SignIn = () => {

	const history = useHistory();
	const isLoggedIn = useSelector(isLoggedInSelector);
	useEffect(() => {
		if (isLoggedIn) {
			history.push('/products');
		}
	}, [isLoggedIn]);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');


	const onSignIn = () => {
		if (password.length > 2 && username.length > 4) {
			AuthCtrl.signIn(username, password);
		} else {
			// TODO: Handle validations
			alert('Invalid username/password');
		}
	}

	return (
		<div className='sign'>
			<form>
				<div>
					Username:
					<input
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
				</div>
				<div>
					Password:
					<input
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						type='password'
					/>
				</div>
				<button onClick={onSignIn}>Sign In</button>

				<button onClick={() => {
					history.push('/signUp')
				}}>Go To Sign Up
				</button>
			</form>
		</div>
	)
}

export default SignIn;
