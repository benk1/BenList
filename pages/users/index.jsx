import axios from 'axios';
import Link from 'next/link';
import styles from '../../styles/Ben.module.css';

export const getStaticProps = async () => {
	const { data: users } = await axios.get(
		'https://jsonplaceholder.typicode.com/users'
	);
	return { props: { users } };
};
const UsersList = ({ users }) => {
	return (
		<div>
			<h1>All workers here</h1>
			{users.map((user) => (
				<Link href={`/users/${user.id}`} key={user.id}>
					<a className={styles.single}>
						<h3>{user.name}</h3>
					</a>
				</Link>
			))}
		</div>
	);
};
export default UsersList;
