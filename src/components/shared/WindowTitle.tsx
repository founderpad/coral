import Head from 'next/head';

export const WindowTitle = ({ title }: { title: string }): JSX.Element => (
	<Head>
		<title>{title}</title>
		{/* <meta property="og:title" content="My page title" key="title" /> */}
	</Head>
);

export default WindowTitle;
