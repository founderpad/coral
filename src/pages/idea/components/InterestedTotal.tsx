import { Label } from 'components/labels';
import React from 'react';

const InterestedTotal = ({ total }: { total?: number }): JSX.Element => {
	if (total > 0)
		return (
			<Label
				color={'yellow.500'}
				fontSize={{ base: 'xs', sm: 'smaller' }}
			>
				{total} interested
			</Label>
		);

	return null;
};

export default InterestedTotal;
