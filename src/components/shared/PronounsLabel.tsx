import { Label } from '@components/labels';
import React, { memo } from 'react';

interface TPronouns {
	pronouns?: string | null;
	customPronouns?: string | null;
}

const PronounsLabel = memo(({ pronouns, customPronouns }: TPronouns) => {
	if (!pronouns) return null;

	return (
		<Label fontSize="xs" color="fpGrey.500">
			({customPronouns ? customPronouns : pronouns})
		</Label>
	);
});

export default PronounsLabel;
