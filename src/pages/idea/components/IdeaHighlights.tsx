import {
	IoBulbSharp,
	IoBusinessSharp,
	IoDocumentsSharp,
	IoLocationSharp
} from 'components/icons';
import { FlexLayout, StackLayout } from 'components/layouts';
import KeyInformationBox from 'components/shared/KeyInformationBox';
import { TNestedPick } from 'components/types';
import { TIdeas } from 'generated/api';
import React, { memo } from 'react';
import HighlightTag from './IdeaHighlightTag';

type IdeaHighlightsProps = Pick<TIdeas, 'status' | 'field'> &
	TNestedPick<TIdeas, 'user', 'country'>;

export const IdeaHighlights = memo(
	(props: IdeaHighlightsProps): JSX.Element => {
		const { status, field, user } = props;
		return (
			<React.Fragment>
				<StackLayout spacing={4} display={{ base: 'none', md: 'flex' }}>
					<KeyInformationBox
						title={'Stage'}
						value={status}
						icon={IoBulbSharp}
					/>
					<KeyInformationBox
						title={'Field'}
						value={field}
						icon={IoBusinessSharp}
					/>
					<KeyInformationBox
						title={'Location'}
						value={user.country}
						icon={IoLocationSharp}
					/>
					<KeyInformationBox
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
				>
					<HighlightTag value={status} />
					<HighlightTag value={field} />
					<HighlightTag value={user.country} />
					<HighlightTag value={'4 documents'} />
				</FlexLayout>
			</React.Fragment>
		);
	}
);

export default IdeaHighlights;
