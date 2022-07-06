import 'styles/index.scss';
import type { AppProps } from 'next/app';
import { SSRProvider } from 'react-bootstrap';

function MyApp({ Component, pageProps }: AppProps) {
	const _renderContent = () => {
		return <Component {...pageProps} />;
	};

	return <SSRProvider>{_renderContent()}</SSRProvider>;
}

export default MyApp;
