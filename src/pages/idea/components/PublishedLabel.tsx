import { Label } from '@components/labels';
import React from 'react';

export const PublishedLabel = ({ isPublished }: { isPublished: boolean }) => {
	if (isPublished) {
		return (
			<Label color={'green.500'} fontSize={'xs'}>
				Published
			</Label>
		);
	}

	return (
		<Label color={'gray.500'} fontSize={'xs'}>
			Not published
		</Label>
	);
};

export default PublishedLabel;
