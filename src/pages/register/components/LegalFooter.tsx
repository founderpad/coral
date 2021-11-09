import { Label } from 'components/labels';
import { PrimaryLink } from 'components/links';
import React, { memo } from 'react';

const LegalFooter = memo(
	(): JSX.Element => (
		<React.Fragment>
			<Label as={'div'} color={'gray.500'} fontSize={'smaller'}>
				By continuing, you agree to founderpad&apos;s{' '}
				<PrimaryLink
					href="https://www.founderpad.com/legal/terms"
					title={'Link to Terms of Service'}
					isExternal
				>
					Terms of Service
				</PrimaryLink>{' '}
				and acknowledge that you&apos;ve read our{' '}
				<PrimaryLink
					href="https://www.founderpad.com/legal/privacy-policy"
					title={'Link to Privacy Policy'}
					isExternal
				>
					Privacy Policy
				</PrimaryLink>{' '}
			</Label>
			<Label
				as={'div'}
				color={'gray.500'}
				fontSize={'smaller'}
				alignSelf={'center'}
			>
				Already have an account?{' '}
				<PrimaryLink href="/login" title={'Link to login'}>
					Login here
				</PrimaryLink>
			</Label>
		</React.Fragment>
	)
);

export default LegalFooter;
