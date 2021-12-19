import { Label } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import BaseTag from 'components/tags/BaseTag';
import { TIdea_Preview } from 'generated/api';
import React from 'react';

type TIdeaCardBody = Pick<
	TIdea_Preview,
	'preview' | 'field' | 'idea_user' | 'status' | 'interested'
>;

const IdeaCardBody = (idea: TIdeaCardBody): JSX.Element => {
	const { preview } = idea;

	return (
		<React.Fragment>
			<Label
				my={6}
				d={'flex'}
				color={'gray.500'}
				overflow={'hidden'}
				whiteSpace={'normal'}
				fontSize={'xs'}
				css={{ whiteSpace: 'normal' }}
				noOfLines={2}
				isTruncated
			>
				{preview.length <= 25 ? preview : `${preview}...`}
			</Label>
			<IdeaCardBodyBadges {...idea} />
		</React.Fragment>
	);
};

export const IdeaCardBodyBadges = (idea: TIdeaCardBody): JSX.Element => {
	const { field, status, interested } = idea;

	return (
		<FlexLayout
			direction={'row'}
			flex={1}
			alignItems={'center'}
			justifyContent={'space-between'}
			w={'full'}
		>
			<StackLayout spacing={2} direction={'row'}>
				<BaseTag
					color={'fpPrimary.500'}
					bg={'white'}
					fontSize={'x-small'}
				>
					{status}
				</BaseTag>
				<BaseTag
					color={'fpPrimary.500'}
					bg={'white'}
					fontSize={'x-small'}
				>
					{field}
				</BaseTag>
			</StackLayout>
			{interested > 0 && (
				<BaseTag
					bg={'fpPrimary.500'}
					color={'white'}
					fontSize={'x-small'}
					alignItems={'center'}
					justifyContent={'center'}
					borderWidth={0}
				>
					{/* <Icon as={IoStarSharp} mr={1} /> */}
					{interested} interested
				</BaseTag>
			)}
		</FlexLayout>
	);
};

export default IdeaCardBody;
