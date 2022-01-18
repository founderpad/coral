import { Label } from '@components/labels';
import React from 'react';

export const InterestedTotal = ({ total = 0 }: { total?: number }) => {
	if (total > 0)
		return (
			<Label color={'yellow.500'} fontSize={'xs'}>
				{total} interested
			</Label>
		);

	return null;
};

export default InterestedTotal;
