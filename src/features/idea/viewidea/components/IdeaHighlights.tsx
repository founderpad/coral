import {
	IoBulbSharp,
	IoBusinessSharp,
	IoDocumentsSharp
} from '@/components/icons';
import { FlexLayout, StackLayout } from '@/components/layouts';
import KeyInformationBox from '@/components/shared/KeyInformationBox';
import { TIdeas } from '@/generated/api';
import React, { memo } from 'react';
import HighlightTag from './IdeaHighlightTag';

type IdeaHighlightsProps = Pick<TIdeas, 'status' | 'field'>;

const IdeaHighlights = memo((props: IdeaHighlightsProps) => {
	const { status, field } = props;

	return (
		<React.Fragment>
			<StackLayout spacing={4} display={{ base: 'none', md: 'flex' }}>
				{status && (
					<KeyInformationBox
						title="Stage"
						value={status}
						icon={IoBulbSharp}
					/>
				)}
				<KeyInformationBox
					title="Field"
					value={field}
					icon={IoBusinessSharp}
				/>
				<KeyInformationBox
					title="Documents"
					value="4 supporting documents"
					icon={IoDocumentsSharp}
				/>
			</StackLayout>
			<FlexLayout
				direction="row"
				display={{ base: 'flex', md: 'none' }}
				flexWrap="wrap"
				alignItems="center"
			>
				{status && <HighlightTag value={status} />}
				<HighlightTag value={field} />
				<HighlightTag value="4 documents" />
			</FlexLayout>
		</React.Fragment>
	);
});

export default IdeaHighlights;
