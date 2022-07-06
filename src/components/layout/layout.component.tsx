import Head from 'next/head';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useStore } from 'store';

import styles from './layout.module.scss';
interface Props {}

export const Layout: React.FC<Props> = ({ children }: any) => {
	const cartItems = useStore((state) => state.carts);
	const deleteFormCart = useStore((state) => state.removeFromCart);

	console.log('cartItems', cartItems);
	return (
		<>
			<div className={styles['layout']}>
				<Navbar bg='light' expand='lg'>
					<Container>
						<Navbar.Brand href='#home'>
							React-Bootstrap
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav>
								<Nav.Link href='#home'>Home</Nav.Link>
								<Nav.Link href='#link'>Link</Nav.Link>
								<NavDropdown
									title='cart'
									id='basic-nav-dropdown'>
									{cartItems.map((item, index) => (
										<NavDropdown.Item
											key={item.id}
											className='d-flex justify-content-between align-items-center'>
											<div>{item.name}</div>
											<div> {item.size}</div>
											<button
												className='btn btn-danger'
												onClick={() => {
													deleteFormCart(item.id);
												}}>
												delete
											</button>
										</NavDropdown.Item>
									))}
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<main className={styles['layout__main']}>{children}</main>

				<footer>footer</footer>
			</div>
		</>
	);
};
