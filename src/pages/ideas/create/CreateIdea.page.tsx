import { PageLayout } from '@/components/layouts';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import CreateIdeaForm from '../search/components/CreateIdeaForm';
import { PageHtmlHead } from '@/components/shared';
import { Text } from '@chakra-ui/react';

const CreateIdea: NextPage = () => (
	<>
		<PageHtmlHead
			title="Create idea"
			pageSlug="ideas/create"
			description="Create your idea."
		/>
		<PageLayout title="Create your idea">
			<CreateIdeaForm />

			<Text fontSize="x-small" color="fpGrey.300" pt={16}>
				The content on our site is provided for general information only
				(including such content uploaded by third parties). This
				includes any community assessment of business ideas on the
				sites. None of this content is intended to amount to advice on
				which you should rely. You must obtain professional or
				specialist advice before taking, or refraining from, any action
				on the basis of any of the content on our site, including such
				content published by any third parties.
			</Text>
		</PageLayout>
	</>
);

export default AuthFilter(CreateIdea);
