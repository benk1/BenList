import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ben List | Home</title>
				<meta name="keywords" content="list" />
			</Head>
			<div>
				<h1 className={styles.title}>Home Page</h1>
				<p className={styles.text}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam aut hic
					eius ullam eaque doloremque at, culpa harum consequuntur inventore
					expedita quaerat, ipsum ea numquam, nam dolor earum. Rerum, error!
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
					ipsa? Rem magnam cum assumenda, ut autem sint natus labore quae
					facilis recusandae sunt! Veritatis consequuntur sequi natus dolorem
					pariatur temporibus?
				</p>
				<Link href="/users">
					<a className={styles.btn}>View Ben Listing</a>
				</Link>
			</div>
		</>
	);
}
