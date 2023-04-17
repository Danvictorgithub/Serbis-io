import React from 'react';
import Location from './components/location';
import ServicesContent from "./components/servicesContent";
export interface ServiceInfo {
	sName:string,
	sImg:string,
	sTag:string,
}
export default function Home({mapLocation}:{mapLocation:string}) {
	const services:ServiceInfo[] = [
		{sName:"Vita Spring",sImg:"348s.jpg",sTag:"Water Delivery"},
		{sName:"SM Mall Cinema",sImg:"1f213.jpg",sTag:"Entertainment"}
	];
	// to do
	//  create the search component
	// 	design backend: (also decide if it is SQL or NOSQL)
	return (
		<div className='home container'>
			<div className='wrapper'>
				<Location mapLocation={mapLocation}/>
				<ServicesContent services={services}/>
			</div>
		</div>
	)
}