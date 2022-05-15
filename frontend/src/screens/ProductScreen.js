import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	ListGroupItem,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
// import products from '../products';
import { listProductDetail } from '../redux/actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const ProductScreen = ( { match } ) => {
	const dispatch = useDispatch()
	const productDetails = useSelector((state)=>state.productDetails)
	const{loading, error, product} = productDetails 
	useEffect( () => {
		dispatch(listProductDetail(match.params.id))
	
		
	}, [dispatch,match,])
	// const product = {}
	// const product = products.find((p) => p._id === match.params.id);
	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			{
				loading ? (
				<Loader/>
			) : error ? (
					<Message variant='danger'>{error}</Message> 
			) : (<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroupItem>
							<h4>{product.name}</h4>
						</ListGroupItem>
						<ListGroupItem>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							/>
						</ListGroupItem>
						<ListGroupItem>price: ${product.price}</ListGroupItem>
						<ListGroupItem>Description: {product.description}</ListGroupItem>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroupItem>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroupItem>
							<ListGroupItem>
								<Row>
									<Col>Status:</Col>
									<Col>
										{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
									</Col>
								</Row>
							</ListGroupItem>
							<ListGroupItem className='d-flex justify-content-center align-items-center'>
								<Button
									className='btn-block'
									type='button'
									disabled={product.countInStock === 0}
								>
									Add To Cart
								</Button>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
			</Row>
	)
			}
			
		</>
	);
};

export default ProductScreen;
