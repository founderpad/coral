import { PrimaryButton } from 'components/buttons';
import { SubheadingText } from 'components/heading';
import { FlexLayout, StackLayout } from 'components/layouts';
import { PointSeparator } from 'components/shared';
import IdeaContext from 'context/idea/IdeaContext';
import React, { memo, useCallback, useContext, useState } from 'react';
import IdeaUpvote from './IdeaUpvote';
import InterestedTotal from './InterestedTotal';
import PublishedLabel from './PublishedLabel';

export const IdeaTitleHeader = memo(() => {
	const [showComments, setShowComments] = useState(false);
	const {
		data: { idea }
	} = useContext(IdeaContext);

	const { name, isPublished, totalInterested } = idea;

	const onShowCommentsClick = useCallback(() => {
		setShowComments(!showComments);

		document.getElementById('idea-comments').scrollIntoView({
			behavior: 'smooth'
		});
	}, [showComments]);
	return (
		<FlexLayout wordBreak={'break-all'} flexDirection={'column'}>
			<SubheadingText>{name}</SubheadingText>
			<FlexLayout justifyContent={'space-between'} alignItems={'center'}>
				<StackLayout
					direction={'row'}
					spacing={1}
					pt={2}
					alignItems={'center'}
				>
					<PublishedLabel isPublished={isPublished} />
					{totalInterested > 0 && (
						<React.Fragment>
							<PointSeparator small />
							<InterestedTotal total={totalInterested} />
						</React.Fragment>
					)}
					<PointSeparator small />
					<IdeaUpvote {...idea} />
				</StackLayout>

				<PrimaryButton
					name={'show-comments'}
					variant={'ghost'}
					onClick={onShowCommentsClick}
					display={{ base: 'none', md: 'block' }}
					alignContent={'center'}
				>
					View comments
				</PrimaryButton>
			</FlexLayout>
		</FlexLayout>
	);
});

export default IdeaTitleHeader;
