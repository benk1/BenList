import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';

const NotFound = () => {
	const router = useRouter(); //This is used to redirect the user
	useEffect(() => {
		setTimeout(() => {
			// router.go(-1); // this can be used if you know where they come from:)
			router.push('/');
		}, 3000);
	}, []);
	return (
		<div className="not-found">
			<h1>Oooops...</h1>
			<h2>That Page can not be found!</h2>
			<p>
				Go back to the{' '}
				<Link href="/">
					<a>Homepage</a>
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
