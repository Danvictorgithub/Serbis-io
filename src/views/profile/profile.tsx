import React from 'react';

export default function Profile() {
	return (
		<div className='profile container'>
			<div className='wrapper'>
				<img className="profile-landing-image"src="profile-landing-image.png"></img>
				<form className='login-auth'>
					<h3>Login to get your favorite services</h3>
					<div className='inputGroup'>
						<label htmlFor='username' hidden>Username</label>
						<input type="text" maxLength={32} placeholder='Username' name="username"></input>
						<label htmlFor='username' hidden>Password</label>
						<input type="password" maxLength={32} placeholder='Password' name="password"></input>
						<button className='loginSubmit' type='button'>Login</button>
					</div>
				</form>
			</div>
		</div>
	)
}