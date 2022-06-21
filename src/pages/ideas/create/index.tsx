import { Label } from '@/components/labels';
import { PageLayout } from '@/components/layouts';
import { DocumentTitle } from '@/components/shared';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import CreateIdeaForm from '../search/components/CreateIdeaForm';

const CreateIdea: NextPage = () => (
	<React.Fragment>
		<DocumentTitle title="Create idea" />
		<PageLayout title="Create your idea">
			<CreateIdeaForm />

			<Label fontSize="x-small" color="fpGrey.300" pt={16}>
				The content on our site is provided for general information only
				(including such content uploaded by third parties). This
				includes any community assessment of business ideas on the
				sites. None of this content is intended to amount to advice on
				which you should rely. You must obtain professional or
				specialist advice before taking, or refraining from, any action
				on the basis of any of the content on our site, including such
				content published by any third parties.
			</Label>
		</PageLayout>
	</React.Fragment>
);

export default AuthFilter(CreateIdea);
