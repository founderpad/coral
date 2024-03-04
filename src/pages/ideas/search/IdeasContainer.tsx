import { StackLayout } from '@/components/layouts';
import {
	AppDivider,
	Loading,
	NoResults,
	PageHeader
} from '@/components/shared';
import { TIdeaPreviewFieldsFragment } from '@/generated/api';
import React from 'react';
import IdeaCard from './components/ideacard/IdeaCard';
import OffsetPagination from './OffsetPagination';
import SearchActions from '@/components/shared/SearchActions';
import MobileFilterMenu from './components/MobileFilterMenu';
import IdeasSearchForm from './components/IdeasSearchForm';
import { useIdeas } from './hooks/searchideas';

const IdeasContainer = () => {
	const { data, total, loading } = useIdeas();
	const hasResults = data?.length ?? 0;

	if (loading) return <Loading small />;

	return (
		<>
			<PageHeader
				title="All ideas"
				subtitle="The latest ideas from the community"
			/>
			<StackLayout p={{ base: 4, sm: 6 }} flex={1}>
				<SearchActions total={total ?? 0} pageSize={data?.length ?? 0}>
					<MobileFilterMenu title="ideas" form="idea-filter-form">
						<IdeasSearchForm />
					</MobileFilterMenu>
				</SearchActions>

				{!loading && hasResults < 1 ? (
					<NoResults back />
				) : (
					<StackLayout display="flex" spacing={6}>
						{data?.map((idea: TIdeaPreviewFieldsFragment) => (
							<React.Fragment key={idea.id}>
								<IdeaCard {...idea} />
								<AppDivider />
							</React.Fragment>
						))}
					</StackLayout>
				)}

				{hasResults && (
					<OffsetPagination
						pagesCount={(total || 0) / 10}
						pathname="/ideas/search"
					/>
				)}
			</StackLayout>
		</>
	);
};

export default IdeasContainer;
