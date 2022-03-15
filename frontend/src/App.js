import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/gen-layout/Header';
import Footer from './components/gen-layout/Footer';

const App = () => {
	return (
		<Fragment>
			<Header />
			<main className='py-3'>
				<Container>
					<h1>Ghost shop is here</h1>
				</Container>
			</main>
			<Footer />
		</Fragment>
	);
};

export default App;
