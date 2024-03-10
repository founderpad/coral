import { StackLayout } from '@/components/layouts';
import { useSocialLogin } from '@/hooks/auth';
import { Provider } from '@nhost/nhost-js';
import Router from 'next/router';
import React, { memo, useCallback } from 'react';
import { isIOS } from 'react-device-detect';
import GoogleLogin from 'react-google-login';

const SocialLogins = memo(() => {
	const onLogin = useSocialLogin();

	const onSocialLogin = useCallback(
		(provider: Provider) => {
			onLogin(provider);
		},
		[onLogin]
	);

	const checkIosRedirect = () => {
		if (isIOS) {
			Router.replace('/ideas/search?page=1');
		}
	};

	return (
		<StackLayout
			display="flex"
			justifyContent="center"
			spacing={4}
			w="full"
			alignItems="center"
			alignSelf="center"
		>
			{/* <Label
				display="flex"
				alignItems="center"
				fontSize="xs"
				color="fpGrey.200"
				py={2}
				css={{
					'&:before, &:after': {
						content: "'--------------------'",
						height: '1px',
						backgroundColor: '#D4D9E0',
						flexGrow: 4,
						display: 'flex',
						color: 'transparent',
						margin: '0px 16px'
					}
				}}
			>
				Or
			</Label> */}

			<div onClick={() => onSocialLogin('google')}>
				<GoogleLogin
					clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
					onSuccess={checkIosRedirect}
					// onFailure={responseGoogle}
					cookiePolicy="single_host_origin"
					isSignedIn={true}
					uxMode="redirect"
				/>
			</div>
		</StackLayout>
	);
});

export default SocialLogins;
