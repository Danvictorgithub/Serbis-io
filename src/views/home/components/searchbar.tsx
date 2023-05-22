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
	function FetchServicesAPI() {
		// do something
	}
	return(
		<div className="searchBar">
			<input type="text" onChange={updateSearchForm} placeholder="Search Services" value={searchForm}/>
			<button type="button" onClick={submitHandlerButton}><img className="searchIcon" src={searchIcon}/></button>
		</div>
	)
}