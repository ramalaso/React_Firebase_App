import React from 'react';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate, Link, Navigate } from 'react-router-dom';

function Profile() {
	const auth = getAuth();

	const [formData, SetFormData] = useState({
		name: auth.currentUser.displayName,
		email: auth.currentUser.email,
	});

	const navigate = useNavigate();

	const onLogout = () => {
		auth.signOut();
		navigate('/');
	};

	return (
		<div className='profile'>
			<header className='profileHeader'>
				<p className='pageHeader'>My Profile</p>
				<p>{formData.name}</p>
				<p>{formData.email}</p>
				<button type='button' className='logOut' onClick={onLogout}>
					Logout
				</button>
			</header>
		</div>
	);
}

export default Profile;
