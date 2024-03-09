import { FlexLayout, StackLayout } from '@/components/layouts';
import InterestedTotal from '@/features/idea/viewidea/components/InterestedTotal';
import { TIdeaPreviewFieldsFragment } from '@/generated/api';
import { Tag } from '@chakra-ui/react';

type TIdeaCardBody = Pick<
	TIdeaPreviewFieldsFragment,
	| 'field'
	| 'user'
	| 'status'
	| 'summary'
	| 'interested_aggregate'
	| 'boosted_idea'
>;

export const IdeaCardBodyBadges = (idea: TIdeaCardBody) => {
	const {
		field,
		status,
		interested_aggregate,
		boosted_idea: _boosted_idea
	} = idea;

	const totalInterested = interested_aggregate.aggregate?.count;

	return (
		<FlexLayout
			direction="row"
			flex={1}
			alignItems="center"
			justifyContent="space-between"
			w="full"
		>
			<StackLayout spacing={2} direction="row">
				<Tag
					fontSize="11px"
					size="sm"
					bg="transparent"
					borderWidth={1}
					px={3}
					py={1}
					color="fpGrey.700"
				>
					{status}
				</Tag>
				<Tag
					fontSize="11px"
					size="sm"
					bg="transparent"
					borderWidth={1}
					px={3}
					py={1}
					color="fpGrey.700"
				>
					{field}
				</Tag>
			</StackLayout>

			{totalInterested ? (
				<InterestedTotal total={totalInterested} />
			) : null}
		</FlexLayout>
	);
};
