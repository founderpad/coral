import { Image } from '@chakra-ui/image';
import { Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import WindowTitle from 'components/shared/WindowTitle';
import React from 'react';

interface Props {
	header: string;
	children: React.ReactNode;
	title: string;
	subheader?: string;
}

const AuthLayout = ({
	header,
	children,
	title,
	subheader
}: Props): JSX.Element => {
	return (
		<React.Fragment>
			<WindowTitle title={title} />
			<Flex
				flex={1}
				direction={{ base: 'column', md: 'row' }}
				bgColor={{ base: 'white', sm: 'gray.50' }}
			>
				<Flex
					p={{ sm: 6 }}
					flex={1}
					align={'center'}
					justify={'center'}
				>
					<Stack
						spacing={4}
						minW={{ base: 'full', sm: '450px' }}
						maxW={{ base: 'full', sm: '600px' }}
						borderWidth={{ sm: '1px' }}
						bg={'white'}
						borderColor={'gray.100'}
						p={6}
						boxShadow={{ sm: 'sm' }}
					>
						<Image
							src="/logo.svg"
							mx="auto"
							alt="logo"
							height="40px"
							width="200px"
						/>
						<Heading
							textAlign={'center'}
							fontSize={'2xl'}
							color={'gray.600'}
						>
							{header}
						</Heading>
						<Text textAlign={'center'} color={'gray.400'}>
							{subheader}
						</Text>
						{children}
					</Stack>
				</Flex>
			</Flex>
		</React.Fragment>
	);
};

export default AuthLayout;
