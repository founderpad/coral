import { Label } from '@/components/labels';
import { StackLayout } from '@/components/layouts';
import { PrimaryLink } from '@/components/links';
import { memo } from 'react';

const LoginFooter = memo(() => (
	<StackLayout
		spacing={2}
		pt={8}
		alignItems="center"
		direction={{ base: 'column-reverse', sm: 'row' }}
		justifyContent={{ sm: 'space-between' }}
		display="flex"
		w="full"
	>
		<Label color="gray.500" fontSize="xs">
			No account?{' '}
			<PrimaryLink href="/register" title="Link to register an account">
				Register now
			</PrimaryLink>
		</Label>
		<PrimaryLink
			href="/resetpassword"
			title="Link to register an account"
			fontSize="xs"
		>
			Forgotten password?
		</PrimaryLink>
	</StackLayout>
));

export default LoginFooter;
