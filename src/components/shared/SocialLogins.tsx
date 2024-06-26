import { StackLayout } from '@/components/layouts';
import { useSocialLogin } from '@/hooks/auth';
// import { Button, Icon } from '@chakra-ui/react';
import { Provider } from '@nhost/nhost-js';
import Router from 'next/router';
import React, { memo, useCallback } from 'react';
import { isIOS } from 'react-device-detect';
import GoogleLogin from 'react-google-login';
// import { IoLogoGithub } from 'react-icons/io5';

export const SocialLogins = memo(() => {
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
			{/* <Button
				leftIcon={<Icon as={IoLogoGithub} fontSize="x-large" />}
				rounded="none"
				width={'200px'}
				height="36px"
				bg="black"
				color="white"
				fontSize="13px"
				justifyContent="flex-start"
				_hover={{ bg: 'black' }}
				title="Sign in with GitHub"
				onClick={() => onSocialLogin('github')}
			>
				Sign in with GitHub
			</Button> */}
			{/* </BoxLayout> */}
			{/* <Button
				leftIcon={<Icon as={IoLogoGithub} fontSize="x-large" />}
				rounded="none"
				width={'200px'}
				height="36px"
				bg="black"
				color="white"
				fontSize="13px"
				justifyContent="flex-start"
				_hover={{ bg: 'black' }}
				title="Sign in with GitHub"
				onClick={() => onSocialLogin('github')}
			>
				Sign in with GitHub
			</Button> */}
			{/* <div
				className="fb-login-button"
				data-width=""
				data-size="medium"
				data-button-type="login_with"
				data-layout="default"
				data-auto-logout-link="false"
				data-use-continue-as="true"
				onClick={() => onSocialLogin('facebook')}
			></div> */}
		</StackLayout>
	);
});
