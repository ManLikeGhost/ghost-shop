import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/shared-layout/Header';
import Footer from './components/shared-layout/Footer';
import HomeScreens from './screens/HomeScreens';
const App = () => {
	return (
		<Fragment>
			<Header />
			<main className='py-3'>
				<Container>
					<HomeScreens/>
				</Container>
			</main>
			<Footer />
		</Fragment>
	);
};

export default App;
