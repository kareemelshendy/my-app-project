import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useStore } from 'store';

interface Props {}

export const Cart: React.FC<Props> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const addToCart = useStore((state) => state.addToCart);
	const carts = useStore((state) => state.carts);

	const onSubmit = (data: any) => {
		console.log('fromData', data);
		addToCart({ ...data, id: carts[carts.length - 1]?.id + 1 || 1 });
		reset();
	};
	return (
		<>
			<Container>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control
							{...register('name', { required: true })}
							type='text'
							placeholder='Name'
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Size</Form.Label>
						<Form.Select
							aria-label='Default select example'
							{...register('size', { required: true })}>
							{/* <option value={undefined}>Select size</option> */}
							<option value='S'>S</option>
							<option value='M'>M</option>
							<option value='L'>L</option>
							<option value='XL'>XL</option>
							<option value='XLL'>XLL</option>
						</Form.Select>
					</Form.Group>
					<Form.Group>
						<Form.Label>Color</Form.Label>
						<Form.Control
							{...register('color')}
							type='text'
							placeholder='Color'
						/>
					</Form.Group>

					<Button type='submit' className='mt-4'>
						Submit
					</Button>
				</Form>
			</Container>
		</>
	);
};
