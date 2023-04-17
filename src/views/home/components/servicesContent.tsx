import React from "react";
import { ServiceInfo } from "../home";
import uniqid from "uniqid";
import HeartOutlineLogo from "../../../assets/heartOutlineLogo";
export default function ServicesContent({services}:{services:ServiceInfo[]}) {
	return(
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
	)
}