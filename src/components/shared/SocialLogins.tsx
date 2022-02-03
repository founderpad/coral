import { PrimaryButton } from '@components/buttons';
import { BoxLayout, StackLayout } from '@components/layouts';
import { useSocialLogin } from '@hooks/auth';
import React, { memo, useCallback } from 'react';
import { TAuthProvider } from '../../types/auth';

// const SocialLogins = memo(({ isSignup }: { isSignup: boolean }) => {
const SocialLogins = memo(() => {
	const onLogin = useSocialLogin();

	const onSocialLogin = useCallback(
		(provider: TAuthProvider) => {
			onLogin(provider);
		},
		[onLogin]
	);

	document.getElementsByClassName('');

	return (
		<StackLayout
			d={'flex'}
			justifyContent={'center'}
			spacing={0}
			w={{ base: 'full', sm: '175px' }}
			alignItems={'center'}
			alignSelf={'center'}
		>
			{/* <PrimaryButton
				name={'magiclinklogin'}
				variant={'outline'}
				w={{ base: 'full', sm: '175px' }}
			>
				Login with magic link
			</PrimaryButton> */}
			<BoxLayout
				id={'socialLogin'}
				data-testid={'socialLogin'}
				alignSelf={'center'}
				onClick={() => onSocialLogin('google')}
				cursor={'pointer'}
				css={{
					'> *:active': {
						pointerEvents: 'none'
					}
				}}
			>
				<div
					className="g-signin2"
					data-onsuccess="onSocialLogin"
					data-theme="light"
					data-longtitle="true"
				/>
			</BoxLayout>
		</StackLayout>
	);
});

export default SocialLogins;
