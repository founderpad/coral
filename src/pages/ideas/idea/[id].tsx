import { DocumentTitle } from '@components/shared';
import { useIdeaQuery } from '@generated/api';
import { useAuth } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import AuthFilter from '@utils/AuthFilter';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import ViewIdeaTabLayout from './ViewIdeaTabLayout';

const ViewIdea: NextPage = () => {
	const userId = useAuth().user?.id;
	const ideaId = useQueryParam('id');

	useIdeaQuery({
		variables: {
			id: ideaId,
			userId
		}
	});

	return (
		<React.Fragment>
			<Head>
				<meta
					property="og:title"
					content="Founderpad · View idea"
					key="title"
				/>
				<meta
					property="og:url"
					content={`https://app.founderpad.com/idea/${ideaId}`}
				/>
				<meta
					property="og:image"
					content="https://founderpad-file-uploads.s3.eu-west-1.amazonaws.com/founderpad-og-image%40256x256.png"
				/>
				<meta property="og:site_name" content="Founderpad" />
				<meta
					property="og:description"
					content="View this idea and see whether or not you would be interested in collaborating on it, and how popular it is with other users."
				/>
			</Head>
			<DocumentTitle title="View idea" />
			<ViewIdeaTabLayout />
		</React.Fragment>
	);
};

export default AuthFilter(ViewIdea);
