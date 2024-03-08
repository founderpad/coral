import Head from 'next/head';

interface PageHeadProps {
	title?: string;
	pageSlug: string;
	description: string;
}

export const PageHtmlHead = ({
	title,
	pageSlug,
	description
}: PageHeadProps) => (
	<Head>
		<title>{title} &middot; founderpad</title>
		<meta
			property="og:title"
			content={`Founderpad${title ? ` · ${title}` : ''}`}
			key="title"
		/>
		<meta
			property="og:url"
			content={`https://app.founderpad.com/${pageSlug}`}
		/>
		<meta
			property="og:image"
			content="https://founderpad-file-uploads.s3.eu-west-1.amazonaws.com/founderpad-og-image%40256x256.png"
		/>
		<meta property="og:site_name" content="Founderpad" />
		<meta property="og:description" content={description} />
	</Head>
);
