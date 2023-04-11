import React from 'react';
import Icon from '@mdi/react';
import {mdiStarOutline} from '@mdi/js';
export default function Header() {
	return (
		<div className='header'>
			<h1>Serbis.<span>io</span></h1>
			<Icon path={mdiStarOutline} size={1.5} />
		</div>
	)
}