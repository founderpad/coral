import SearchContentGridLayout from '@components/layouts/SearchContentGridLayout';
import { DocumentTitle, PageHeader } from '@components/shared';
import AuthFilter from '@utils/AuthFilter';
import Head from 'next/head';
import React from 'react';
import FounderSearchForm from './components/FounderSearchForm';
import FoundersContainer from './FoundersContainer';

const Founders = () => (
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

		<SearchContentGridLayout>
			<FounderSearchForm />
			<PageHeader title="All users" subtitle="Search all users" />
			<FoundersContainer />
		</SearchContentGridLayout>

		{/* <PageLayout title="All users"> */}
		{/* <SearchContentGridLayout>
				<FounderSearchForm />
				<FoundersContainer />
			</SearchContentGridLayout> */}
		{/* <Box
			d={'flex'}
			flex={1}
			justifyContent={'center'}
			alignItems={'center'}
			flexDirection={'column'}
		>
			<Box
				d={'flex'}
				flex={1}
				justifyContent={'center'}
				alignItems={'center'}
				flexDirection={'column'}
			>
				<Icon
					as={IoPeople}
					fontSize={'xx-large'}
					color={'gray.500'}
					mb={4}
				/>
				<Heading color={'gray.500'} fontSize={'lg'}>
					Users coming soon
				</Heading>
			</Box>
		</Box> */}
		{/* </PageLayout> */}
	</React.Fragment>
);

export default AuthFilter(Founders);
