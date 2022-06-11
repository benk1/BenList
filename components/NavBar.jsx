import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
	return (
		<nav>
			<div className="logo">
				<Image width={100} height={87} src="/images/user.jpg" />
				<h1>Ben List</h1>
			</div>
			<Link href="/">
				<a className="border">Home</a>
			</Link>
			<Link href="/about">
				<a className="border">About</a>
			</Link>
			<Link href="/users">
				<a className="border">BenListing</a>
			</Link>
		</nav>
	);
};

export default NavBar;
