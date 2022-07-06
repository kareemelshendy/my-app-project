import { Cart, Layout, ProductTable } from 'components';
import { NextPage } from 'next';

interface Props {}

const Home: NextPage<Props> = () => {
	return (
		<Layout>
			<Cart />
			<ProductTable />
		</Layout>
	);
};

export default Home;
