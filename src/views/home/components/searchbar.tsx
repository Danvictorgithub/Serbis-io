import React, {useState,useContext} from 'react';
import searchIcon from "../../../assets/icons/search.svg";
import {AppContext} from "../../../App"; 
export default function SearchBar() {
	const [searchForm,setSearchForm] = useState("");
	const MapCenterStates = useContext(AppContext);
	function updateSearchForm(e:React.FormEvent<HTMLInputElement>):void {
		setSearchForm(e.currentTarget.value);
		console.log(searchForm);
	}
	function submitHandlerEnterKey(e:React.KeyboardEvent):void {
		//if user press enter (charCode 13 update API):
		// console.log(e.key);
		if (e.key === "Enter") {
			// getLocation();
		}
		return;
	}
	function submitHandlerButton(e:React.SyntheticEvent):void {
		// getLocation();
		return;
	} 
	function getLocation():void {
		fetch(`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${searchForm}`)
			.then((response) => response.json())
			.then((response) => {
				console.log(response[0].address);
				const location = `${response[0].address.city || response[0].address.village || response[0].address.town}${(typeof response[0].address.village !== "undefined") ? `, ${response[0].address.village}` : ""}`;
				MapCenterStates?.setMapLocation(location);
				setSearchForm("");
			})
			.catch(()=> {return;});
	}
	return(
		<div className="searchBar">
			<input type="text" onChange={updateSearchForm} placeholder="Search Services" value={searchForm}/>
			<button type="button" onClick={submitHandlerButton}><img className="searchIcon" src={searchIcon}/></button>
		</div>
	)
}