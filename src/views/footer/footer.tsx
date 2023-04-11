import AccountLogo from "../../assets/accountLogo";
import EmailLogo from "../../assets/emailLogo";
import HomeLogo from "../../assets/homeLogo";
import MapLogo from "../../assets/mapLogo";
import React from 'react';
export default function Footer() {
	return (
		<div className='footer'>
			<div className='navBot'>
				<HomeLogo/>
				<MapLogo/>
				<EmailLogo/>
				<AccountLogo/>
			</div>
		</div>
	)
}