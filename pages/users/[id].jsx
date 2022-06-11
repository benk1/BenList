import axios from 'axios';

const apiEndPoint = 'https://jsonplaceholder.typicode.com/users/';

export const getStaticPaths = async () => {
	const { data: users } = await axios.get(apiEndPoint);
	// const paths = users.map((user) => ({ params: { id: user.id.toString() } }));
	const paths = users.map((user) => {
		return {
			params: { id: user.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	// const id = context.params.id;
	const { data: user } = await axios.get(apiEndPoint + '/' + params.id);
	return {
		props: { user },
	};
};

const UserDetails = ({ user }) => {
	console.log(user);

	return (
		<div>
			<h1>{user.name} </h1>
			<p>{user.email}</p>
			<p>{user.website}</p>
			<p>{user.address.city}</p>
		</div>
	);
};

export default UserDetails;
