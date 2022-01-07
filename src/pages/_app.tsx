import { InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostAuthProvider } from '@nhost/react-auth';
import BaseModal from 'components/modal/BaseModal';
import BaseModalDrawer from 'components/modal/BaseModalDrawer';
import 'focus-visible/dist/focus-visible';
import { useTrackAnalytics } from 'hooks/util';
import { AppProps } from 'next/app';
import Head from 'next/head';
import DrawerProvider from 'provider/DrawerProvider';
import ModalDrawerProvider from 'provider/ModalDrawerProvider';
import ModalProvider from 'provider/ModalProvider';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import theme from 'theme';
import { nhostClient } from 'utils/nhost';
import store from 'utils/store';
import '../styles/globals.css';

const persistor = persistStore(store);

/**
 * The @App component is the entry point into the application. It wraps the application with the @see ChakraProvider which is a TailwindCSS inspired utility-first
 * React component library.
 *
 *
 * @param param0
 * @returns
 * @author jlee
 */
const App = ({ Component, pageProps }: AppProps): React.ReactFragment => {
	useTrackAnalytics();

	return (
		<React.Fragment>
			<Head>
				<link rel="shortcut icon" href="/favicon.svg" />
			</Head>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<NhostAuthProvider nhost={nhostClient}>
						<NhostApolloProvider
							nhost={nhostClient}
							graphqlUrl={process.env.NEXT_PUBLIC_GRAPHQL_BACKEND}
							cache={cache}
						>
							<ChakraProvider theme={theme} resetCSS>
								<ModalProvider>
									<DrawerProvider>
										<ModalDrawerProvider>
											<BaseModal />
											<BaseModalDrawer />
											<Component {...pageProps} />
										</ModalDrawerProvider>
									</DrawerProvider>
								</ModalProvider>
							</ChakraProvider>
						</NhostApolloProvider>
					</NhostAuthProvider>
				</PersistGate>
			</Provider>
		</React.Fragment>
	);
};

const cache = new InMemoryCache({
	// addTypename: false,
	typePolicies: {
		Query: {
			fields: {
				// resourceCollection: {
				// 	keyArgs: false,
				// 	merge(existing, incoming) {
				// 		if (!incoming) return existing;
				// 		if (!existing) return incoming; // existing will be empty the first time

				// 		const { comments, ...rest } = incoming;

				// 		let result = rest;
				// 		result.comments = [...existing.comments, ...comments]; // Merge existing items with the items from incoming

				// 		return result;
				// 	}
				// },
				resourceCollection: offsetLimitPagination(),
				// feed: {
				// 	...offsetLimitPagination(),
				// 	read(existing, { args }): any {
				// 		console.log('exiating: ', existing);
				// 	}
				// },
				// CommentsForIdea: relayStylePagination()
				// CommentsForIdea: offsetLimitPagination()
				idea_comments: offsetLimitPagination()
			}
		}
	}
});

export { cache };

export default App;
