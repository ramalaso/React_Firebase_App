import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStatu from '../hooks/useAuthStatu';
import Spinner from './Spinner';

const PrivateRoute = () => {
	const { loggedIn, checkingStatus } = useAuthStatu();

	if (checkingStatus) {
		return <Spinner />;
	}

	return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />;
};

export default PrivateRoute;
