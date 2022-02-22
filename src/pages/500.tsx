import { Heading, Stack } from '@chakra-ui/react';
import { GoBackButton } from '@components/buttons';
import { NextPage } from 'next';

const NotFound: NextPage = () => {
	return (
		<Stack
			h="full"
			display="flex"
			flex={1}
			justifyContent="center"
			alignItems="center"
			spacing={4}
		>
			<Heading color="fpGrey.900">Server error</Heading>
			<GoBackButton />
		</Stack>
	);
};

export default NotFound;
