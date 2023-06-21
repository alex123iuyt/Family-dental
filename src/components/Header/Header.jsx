import React from 'react';
import Logo from '../Logo/Logo'
import NavigationLinks from '../NavigationLinks/NavigationLinks.jsx'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'
import ContactButton from '../ContactButton/ContactButton'
import '../Header/style-header.css';

const Header = () => {
	return (
		<header className='header'>
			<div className='header-container'>
				<Logo />
				<div className='header-right'>
					<NavigationLinks />
					<div className='header-divider'>|</div>
					<LanguageSwitch />
					<ContactButton />
				</div>
			</div>

		</header>
	)
}
export default Header;