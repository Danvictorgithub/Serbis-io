import React from 'react';
import uniqid from "uniqid";
interface Mail {
	user:string,
	message:string
}

export default function Mail() {
	const mailArray:Mail[] = [
		{message:"lorem ipsum es camat lorem ipsum es camatlorem ipsum es camatlorem ipsum es camatlorem ipsum es camat",
		 user:uniqid()
		},
		{message:"lorem ipsum es camat lorem ipsum es camatlorem ipsum es camatlorem ipsum es camatlorem ipsum es camat",
		 user:uniqid()
		},
		{message:"lorem ipsum es camat lorem ipsum es camatlorem ipsum es camatlorem ipsum es camatlorem ipsum es camat",
		 user:uniqid()
		},
		{message:"lorem ipsum es camat lorem ipsum es camatlorem ipsum es camatlorem ipsum es camatlorem ipsum es camat",
		 user:uniqid()
		},
		{message:"lorem ipsum es camat lorem ipsum es camatlorem ipsum es camatlorem ipsum es camatlorem ipsum es camat",
		 user:uniqid()
		},
		{message:"lorem ipsum es camat lorem ipsum es camatlorem ipsum es camatlorem ipsum es camatlorem ipsum es camat",
		 user:uniqid()
		},
		{message:"lorem ipsum es camat lorem ipsum es camatlorem ipsum es camatlorem ipsum es camatlorem ipsum es camat",
		 user:uniqid()
		},


		];
	const isMailEmpty = (mailArray.length == 0);
	return (
		<div className='mail container'>
			<div className='wrapper'>
				{(isMailEmpty) ? <h2 className='mailEmpty'>Your mail is empty</h2>:<></>}
				{mailArray.map((mail:Mail):JSX.Element=> {
					return <div className="mailContainer" key={uniqid()}>
						<img className="defaultProfile" src="/defaultProfile.jpg"></img>
						<h3>{mail.user}</h3>
						<p className='mailMessage'>{mail.message}</p>											
					</div>
				})}
			</div>
		</div>
	)
}