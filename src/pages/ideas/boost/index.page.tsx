import { PageLayout } from '@/components/layouts';
import { PageHtmlHead } from '@/components/shared';
import AuthFilter from '@/utils/AuthFilter';
import React from 'react';
import BoostedIdeasGridLayout from './BoostedIdeasGridLayout';

const BoostedIdeas = () => (
	<>
		<PageHtmlHead
			title="Boosted ideas"
			pageSlug="/ideas/boost?page=1"
			description="All boosted ideas."
		/>

		<PageLayout
			title="Boosted ideas"
			subtitle="All currently boosted ideas"
			p={{ base: 0, md: 4 }}
		>
			<BoostedIdeasGridLayout />
		</PageLayout>
	</>
);

export default AuthFilter(BoostedIdeas);
