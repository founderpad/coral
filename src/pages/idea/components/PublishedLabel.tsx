import { Label } from 'components/labels';
import React from 'react';

const PublishedLabel = ({
	isPublished
}: {
	isPublished: boolean;
}): JSX.Element => {
	if (isPublished) {
		return (
			<Label color={'green.500'} fontSize={{ base: 'xs', sm: 'smaller' }}>
				Published
			</Label>
		);
	}

	return (
		<Label color={'gray.500'} fontSize={{ base: 'xs', sm: 'smaller' }}>
			Not published
		</Label>
	);
};

export default PublishedLabel;
