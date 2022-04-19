import { InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { ChakraProvider } from '@chakra-ui/react';
import BaseModal from '@components/modal/BaseModal';
import BaseModalDrawer from '@components/modal/BaseModalDrawer';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { useTrackAnalytics } from '@hooks/util';
import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostAuthProvider } from '@nhost/react-auth';
import DrawerProvider from '@provider/DrawerProvider';
import IdeaCycleProvider from '@provider/IdeaCycleProvider';
import ModalDrawerProvider from '@provider/ModalDrawerProvider';
import ModalProvider from '@provider/ModalProvider';
import NotificationProvider from '@provider/NotificationProvider';
import theme from '@theme/index';
import { nhost } from '@utils/nhost';
import store from '@utils/store';
import 'focus-visible/dist/focus-visible';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
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
				<link
					rel="preconnect"
					href="https://www.googletagmanager.com"
				/>
				<link rel="preconnect" href="https://www.facebook.com" />
				<link rel="preconnect" href="https://connect.facebook.net" />
				{/* <link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/apple-icon.png"></link>
				<meta name="theme-color" content="#fff" /> */}
				<meta
					name="viewport"
					content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
				></meta>
				<meta
					name="description"
					content="The exclusive platform to create, collaborate and innovate on business ideas by finding other co-founders to help bring your business idea to life; and seek our mentors and investors for their support and expertise."
				></meta>
				<meta
					name="google-signin-client_id"
					content={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
				></meta>
				<meta property="og:title" content="Founderpad" key="title" />
				<meta property="og:url" content="https://app.founderpad.com" />
				<meta
					property="og:image"
					content="https://founderpad-file-uploads.s3.eu-west-1.amazonaws.com/founderpad-og-image%40256x256.png"
				/>
				<meta property="og:site_name" content="Founderpad" />
				<meta
					property="og:description"
					content="The exclusive platform to collaborate, form a team, and build your business idea."
				/>
			</Head>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
				`}
			</Script>
			<Script
				src="https://apis.google.com/js/platform.js"
				strategy="lazyOnload"
			/>
			<Script
				src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v13.0&appId=1343110259464334&autoLogAppEvents=1"
				nonce="085tr8cs"
				strategy="lazyOnload"
			></Script>

			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<NhostAuthProvider nhost={nhost}>
						<NhostApolloProvider
							nhost={nhost as any} // Fix this when SDK is stable
							cache={cache}
							connectToDevTools={true}
						>
							<ChakraProvider theme={theme} resetCSS>
								<NotificationProvider>
									<ModalProvider>
										<DrawerProvider>
											<ModalDrawerProvider>
												<IdeaCycleProvider>
													<BaseModal />
													<BaseModalDrawer />
													<Component {...pageProps} />
												</IdeaCycleProvider>
											</ModalDrawerProvider>
										</DrawerProvider>
									</ModalProvider>
								</NotificationProvider>
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
		// interested_ideas: {
		// 	keyFields: ['ideaId']
		// },
		// idea_comments: {
		// 	keyFields: ['ideaId', 'id']
		// },
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
				// CommentsForIdea: relayStylePagination()
				// CommentsForIdea: offsetLimitPagination()
				// idea_comments: {
				// 	keyArgs: ['id', 'ideaId'],
				// 	// merge: true
				// 	merge(existing, incoming) {
				// 		return incoming;
				// 	}
				// 	// offsetLimitPagination()
				// }

				idea_comments: offsetLimitPagination()
				// idea_comments: {
				// 	...offsetLimitPagination(),
				// 	merge(existing = [], incoming) {
				// 		return [...existing, ...incoming];
				// 	}
				// },

				// idea_comments: {
				// 	keyArgs: ['ideaId'],
				// 	merge: true

				// }
				// idea_comments: {
				// 	// ...offsetLimitP, 'idagination(),
				// 	keyArgs: ['ideaId'],
				// 	merge(existing = [], incoming) {
				// 		console.log('incoming: ', incoming);
				// 		console.log('existing: ', existing);

				// 		return [...existing, ...incoming];
				// 	}
				// 	// read(existing, args) {
				// 	// 	console.log('existing: ', existing);
				// 	// 	console.log('args: ', args);
				// 	// }
				// 	// merge: true
				// },
				// message: {
				// 	merge(existing = [], incoming) {
				// 		// console.log('existing: ', existing);
				// 		// console.log('incoming: ', incoming);
				// 	}
				// }
			}
		}
	}
});

export { cache };

export default App;
