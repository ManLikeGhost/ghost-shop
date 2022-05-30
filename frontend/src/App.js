import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/shared-layout/Header';
import Footer from './components/shared-layout/Footer';
import HomeScreens from './screens/HomeScreens';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';


const App = () => {
	return (
		<Router>
			<Fragment>
				<Header />
				<main className='py-3'>
					<Container>
						<Route exact path='/' component={HomeScreens} />
						<Route exact path='/product/:id' component={ProductScreen} />
						<Route exact path='/cart/:id?' component={CartScreen}/>
					</Container>
				</main>
				<Footer />
			</Fragment>
		</Router>
	);
};

export default App;
