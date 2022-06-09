import Link from 'next/link';

const NavBar = () => {
	return (
		<nav>
			<div className="logo">
				<h1>Ben List</h1>
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/ben">
				<a>BenListing</a>
			</Link>
		</nav>
	);
};

export default NavBar;
