/** @jsx h */
import { Fragment, h, Helmet } from '../deps.ts';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import { Hello } from '../components/Hello.tsx';
import { Comments } from '../components/Comments.tsx';

const comments = [
	'Hey! This is the first comment.',
	'Hi, from another comment!',
];

const App = () => {
	return (
		<Fragment>
			<Helmet>
				<title>
					Unwyre
				</title>
				<meta
					name='description'
					content='Unwyre - server side sendered Nano JSX application'
				/>
			</Helmet>
			<Header />
			<main>
				<article>
					<Hello />
					<h4>Comments</h4>
					<Comments comments={comments} />
				</article>
			</main>
			<Footer />
		</Fragment>
	);
};

export default App;
