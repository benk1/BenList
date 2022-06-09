import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
	return (
		<div>
			<div className="content">
				<NavBar />
				{children}
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
