import Head from 'next/head';

export const DocumentTitle = ({ title }: { title: string }): JSX.Element => (
	<Head>
		<title>{title} &middot; founderpad</title>
		{/* <meta property="og:title" content="My page title" key="title" /> */}
	</Head>
);
