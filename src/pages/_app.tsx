import { InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/hind/300.css';
import '@fontsource/hind/400.css';
import '@fontsource/hind/500.css';
import '@fontsource/hind/600.css';
import '@fontsource/hind/700.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostAuthProvider } from '@nhost/react-auth';
import { createStore } from '@reduxjs/toolkit';
import BaseModal from 'components/modal/BaseModal';
import BaseModalDrawer from 'components/modal/BaseModalDrawer';
import 'focus-visible/dist/focus-visible';
import { AppProps } from 'next/app';
import DrawerProvider from 'provider/DrawerProvider';
import ModalDrawerProvider from 'provider/ModalDrawerProvider';
import ModalProvider from 'provider/ModalProvider';
import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import customTheme from 'theme/founderpadTheme';
import { auth } from 'utils/nhost';
import rootReducer from 'utils/reducer';
import store from 'utils/store';
import '../styles/globals.css';

const persistor = persistStore(store);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const AppWrapper = (children: any) => {
	const store = createStore(rootReducer);
	return <Provider store={store}>{children}</Provider>;
};

/**
 * The @App component is the entry point into the application. It wraps the application with the @see ChakraProvider which is a TailwindCSS inspired utility-first
 * React component library.
 *
 *
 * @param param0
 * @returns
 * @author jlee
 */
const App: FC<AppProps> = ({
	Component,
	pageProps
}: AppProps): ReactElement => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NhostAuthProvider auth={auth}>
					<NhostApolloProvider
						auth={auth}
						gqlEndpoint={process.env.NEXT_PUBLIC_GRAPHQL_BACKEND}
						cache={cache}
					>
						<ChakraProvider theme={customTheme} resetCSS>
							<ModalProvider>
								<DrawerProvider>
									<ModalDrawerProvider>
										<BaseModal />
										{/* <BaseDrawer /> */}
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
	);
};

const cache = new InMemoryCache({
	// addTypename: false,
	typePolicies: {
		Query: {
			fields: {
				feed: {
					...offsetLimitPagination()
					// read(existing, { args }) {
					// 	// Implement here
					// }
				}
			}
		}
	}
});

export { AppWrapper, cache };

export default App;
