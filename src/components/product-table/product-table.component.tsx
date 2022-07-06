import { CartItem } from 'models';
import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useStore } from 'store';

interface Props {}
export const ProductTable: React.FC<Props> = () => {
	const cartItems = useStore((state) => state.carts);
	const removeFormCart = useStore((state) => state.removeFromCart);
	const [cartItemsArray, setCartItemArray] = useState<CartItem[]>([]);

	useEffect(() => {
		setCartItemArray(cartItems);
	}, [cartItems]);

	return (
		<Container>
			<Table striped bordered hover className='mt-4'>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Size</th>
						<th>Color</th>
					</tr>
				</thead>
				<tbody>
					{cartItemsArray.length > 0 &&
						cartItemsArray?.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.size}</td>
								<td>{item.color}</td>
								<td>
									<button
										className='btn btn-danger'
										onClick={() => {
											removeFormCart(item.id);
										}}>
										delete
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</Table>
		</Container>
	);
};
