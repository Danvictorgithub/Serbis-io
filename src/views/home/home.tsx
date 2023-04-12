import React from 'react';
import HeartOutlineLogo from "../../assets/heartOutlineLogo";
import uniqid from "uniqid";
import Location from './components/location';
interface ServiceInfo {
	sName:string,
	sImg:string,
	sTag:string,
}

export default function Home() {
	const services:ServiceInfo[] = [
		{sName:"Vita Spring",sImg:"348s.jpg",sTag:"Water Delivery"},
		{sName:"SM Mall Cinema",sImg:"1f213.jpg",sTag:"Entertainment"}
	];
	return (
		<div className='home container'>
			<div className='wrapper'>
				<Location />
				<div className='servicesContent'>
					{services.map((service:ServiceInfo):JSX.Element => {
						return (
							<div className='serviceCard' key={uniqid()}>
								<div className='cardContent'>
									<div className='cardTop'>
										<h3>{service.sName}</h3>
										<HeartOutlineLogo/>	
									</div>
									<div className='cardBot'>
										<div className="cardTag">{service.sTag}</div>
										<button className='cardButton'>Avail Service</button>
									</div>
								</div>
								<img className='cardImg' src={service.sImg}></img>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}