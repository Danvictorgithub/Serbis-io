import React from 'react';
import HeartOutlineLogo from "../../assets/heartOutlineLogo";
import uniqid from "uniqid";
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
			<div className='heroLocation'>
				<h2>Current Location: Butuan</h2>
				<div className='locationMeta'>
					<h3>No. Services: <span>24</span></h3>
					<div className="serviceTags">
						<div className="sTag">Boarding House</div>
						<div className="sTag">Manicure</div>
						<div className="sTag">Water Delivery</div>
						<div className="sTag">Septic Tank Repairs</div>
					</div>
				</div>
			</div>
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
	)
}