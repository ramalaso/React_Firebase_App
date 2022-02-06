import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { ReactComponent as ArrowRigthIcon } from '../assets/svg/keyboardArrowRightIcon.svg';

function ForgotPassword() {
	const [email, setEmail] = useState('');

	const onChange = (e) => setEmail(e.target.value);

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const auth = getAuth();
			await sendPasswordResetEmail(auth, email);
			toast.success('Email was sent');
		} catch (error) {
			toast.error('Could not send reset email');
		}
	};

	return (
		<div className='pageContainer'>
			<header>
				<p className='pageHeader'>Forgot Password</p>
			</header>

			<main>
				<form onSubmit={onSubmit}>
					<input
						type='email'
						id='email'
						placeholder='Email'
						value={email}
						onChange={onChange}
						className='emailInput'
					/>
					<Link className='forgotPasswordLink' to='/sign-in'>
						Sign in
					</Link>
					<div className='signInBar'>
						<div className='signInText'>Send Reset Link</div>
						<button className='signInButton'>
							<ArrowRigthIcon fill='#ffffff' width='34px' height='34px' />
						</button>
					</div>
				</form>
			</main>
		</div>
	);
}

export default ForgotPassword;