import React from 'react';

interface Mail {
	message:string
}

export default function Mail() {
	const mailArray:Mail[] = [
		{message:"lorem ipsum es camat lorem ipsum es camatlorem ipsum es camatlorem ipsum es camatlorem ipsum es camat"},
		{message:"lorem ipsum es camat lorem ipsum es camatlorem ipsum es camatlorem ipsum es camatlorem ipsum es camat"}
		];
	const isMailEmpty = (mailArray.length == 0);
	return (
		<div className='mail container'>
			{(isMailEmpty) ? <h2 className='mailEmpty'>Your mail is empty</h2>:<></>}
			{mailArray.map((mail:Mail):JSX.Element=> {
				return <div className="mailContainer">{mail.message}</div>
			})}
		</div>
	)
}