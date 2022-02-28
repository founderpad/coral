import SearchContentGridLayout from '@components/layouts/SearchContentGridLayout';
import { DocumentTitle } from '@components/shared';
import AuthFilter from '@utils/AuthFilter';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import UsersSearchForm from './components/UsersSearchForm';
import UsersContainer from './UsersContainer';

const UsersSearch: NextPage = () => (
	<React.Fragment>
		<DocumentTitle title="All users" />

		<Head>
			<meta
				property="og:title"
				content="Founderpad · Search ideas"
				key="title"
			/>
			<meta
				property="og:url"
				content="https://app.founderpad.com/ideas?page=1"
			/>
			<meta
				property="og:image"
				content="https://founderpad-file-uploads.s3.eu-west-1.amazonaws.com/founderpad-og-image%40256x256.png"
			/>
			<meta property="og:site_name" content="Founderpad" />
			<meta
				property="og:description"
				content="Search all ideas to collaborate, or form a team"
			/>
		</Head>

		<SearchContentGridLayout search={<UsersSearchForm />}>
			<UsersContainer />
		</SearchContentGridLayout>
	</React.Fragment>
);

export default AuthFilter(UsersSearch);
