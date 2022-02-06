import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExplorerIcon } from '../assets/svg/exploreIcon.svg';
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg';

function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<footer className='navbar'>
			<nav className='navbarNav'>
				<ul className='navbarListItems'>
					<li className='navbarListItem' onClick={() => navigate('/')}>
						<ExplorerIcon
							fill={location.pathname === '/' ? '#2c2c2c' : '#8f8f8f'}
							width='36px'
							heigth='36px'
						/>
						<p>Explore</p>
					</li>
					<li className='navbarListItem' onClick={() => navigate('/offers')}>
						<OfferIcon
							fill={location.pathname === '/offers' ? '#2c2c2c' : '#8f8f8f'}
							width='36px'
							heigth='36px'
						/>
						<p>Offers</p>
					</li>
					<li className='navbarListItem' onClick={() => navigate('/profile')}>
						<PersonOutlineIcon
							fill={location.pathname === '/profile' ? '#2c2c2c' : '#8f8f8f'}
							width='36px'
							heigth='36px'
						/>
						<p>Profile</p>
					</li>
				</ul>
			</nav>
		</footer>
	);
}

export default Navbar;
