import { Text, VStack } from '@chakra-ui/layout';
import { PrimaryLink } from 'components/links';
import React, { memo } from 'react';

const LegalFooter = memo(
	(): JSX.Element => (
		<VStack spacing={6} justifyContent={'center'} w="full" mx={'auto'}>
			<Text as={'div'} color={'gray.500'} fontSize={'xs'}>
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
			</Text>
			<Text as={'div'} color={'gray.500'} fontSize={'xs'}>
				Already have an account?{' '}
				<PrimaryLink href="/app/login" title={'Link to login'}>
					Login here
				</PrimaryLink>
			</Text>
		</VStack>
	)
);

export default LegalFooter;
