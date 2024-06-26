import { Label } from '@/components/labels';
import { StackLayout } from '@/components/layouts';
import { PrimaryLink } from '@/components/links';
import React, { memo } from 'react';

const LegalFooter = memo(() => (
	<StackLayout pt={6} alignItems="center" display="flex" w="full">
		<Label as="div" color="gray.500" fontSize="xs" pt={6}>
			By continuing, you agree to founderpad&apos;s{' '}
			<PrimaryLink
				href="/terms-of-conditions"
				title="Link to Terms of Service"
				isExternal
			>
				Terms of Service{' '}
			</PrimaryLink>
			and acknowledge that you&apos;ve read our{' '}
			<PrimaryLink
				href="/privacy-policy"
				title="Link to Privacy Policy"
				isExternal
			>
				Privacy Policy.
			</PrimaryLink>
		</Label>
		<Label as="div" color="gray.500" fontSize="xs" alignSelf="center">
			Already have an account?{' '}
			<PrimaryLink href="/login" title="Link to login">
				Login here
			</PrimaryLink>
		</Label>
	</StackLayout>
));

export default LegalFooter;
