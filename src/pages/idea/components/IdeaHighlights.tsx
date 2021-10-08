import { FlexLayout, StackLayout } from 'components/layouts';
import { TNestedPick } from 'components/types';
import { Ideas } from 'generated/graphql';
import React, { memo } from 'react';
import {
	IoBulbSharp,
	IoBusinessSharp,
	IoDocumentsSharp,
	IoLocationSharp
} from 'react-icons/io5';
import IdeaHighlight from './IdeaHighlightBox';
import HighlightTag from './IdeaHighlightTag';

type IdeaHighlightsProps = Pick<Ideas, 'status' | 'field'> &
	TNestedPick<Ideas, 'idea_user', 'country'>;

export const IdeaHighlights = memo(
	(props: IdeaHighlightsProps): JSX.Element => {
		const { status, field, idea_user } = props;
		return (
			<React.Fragment>
				<StackLayout spacing={4} display={{ base: 'none', md: 'flex' }}>
					<IdeaHighlight
						title={'Stage'}
						value={status}
						icon={IoBulbSharp}
					/>
					<IdeaHighlight
						title={'Field'}
						value={field}
						icon={IoBusinessSharp}
					/>
					<IdeaHighlight
						title={'Location'}
						value={idea_user.country}
						icon={IoLocationSharp}
					/>
					<IdeaHighlight
						title={'Documents'}
						value={'4 supporting documents'}
						icon={IoDocumentsSharp}
					/>
				</StackLayout>
				<FlexLayout
					direction={'row'}
					display={{ base: 'flex', md: 'none' }}
					flexWrap="wrap"
					alignItems={'center'}
					// css={{
					// 	'> *': {
					// 		marginRight: 4,
					// 		marginBottom: 4
					// 	}
					// }}
				>
					<HighlightTag value={status} />
					<HighlightTag value={field} />
					<HighlightTag value={idea_user.country} />
					<HighlightTag value={'4 documents'} />
					{/* <Label
						label={status}
						fontSize={'xs'}
						color={'fpPrimary.500'}
					/>
					<PointSeparator small />
					<Label
						label={field}
						fontSize={'xs'}
						color={'fpPrimary.500'}
					/>
					<PointSeparator small />
					<Label
						label={idea_user.country}
						fontSize={'xs'}
						color={'fpPrimary.500'}
					/>
					<PointSeparator small />
					<Label
						label={'4 supporting documents'}
						fontSize={'xs'}
						color={'fpPrimary.500'}
					/> */}
				</FlexLayout>
			</React.Fragment>
		);
	}
);

export default IdeaHighlights;
