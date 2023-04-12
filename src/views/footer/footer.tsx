import AccountLogo from "../../assets/accountLogo";
import EmailLogo from "../../assets/emailLogo";
import HomeLogo from "../../assets/homeLogo";
import MapLogo from "../../assets/mapLogo";
import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className='footer'>
			<div className='navBot'>
				<Link to="/"><HomeLogo /></Link>
				<Link to="/map"><MapLogo/></Link>
				<Link to="/inbox"><EmailLogo/></Link>
				<Link to="/profile"><AccountLogo/></Link>
			</div>
		</div>
	)
}