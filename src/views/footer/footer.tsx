import React from 'react';
import Icon from '@mdi/react';
import { mdiHomeRoof, mdiMapMarkerOutline, mdiAccountOutline, mdiEmailOutline } from '@mdi/js';
export default function Footer() {
	const scale = 1.75;
	return (
		<div className='footer'>
			<div className='navBot'>
				<Icon path={mdiHomeRoof} size={scale} />
				<Icon path={mdiMapMarkerOutline} size={scale} />
				<Icon path={mdiEmailOutline} size={scale} />
				<Icon path={mdiAccountOutline} size={scale} />
			</div>
		</div>
	)
}