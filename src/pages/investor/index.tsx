import Icon from '@chakra-ui/icon';
import { Box, Heading } from '@chakra-ui/layout';
import { IoLockClosedSharp } from '@components/icons';
import AuthFilter from '@utils/AuthFilter';
// import MainInvestorLayout from '@components/layouts/MainInvestorLayout';
import React from 'react';

const Investor = () => {
	return (
		// <MainInvestorLayout>
		<Box
			d={'flex'}
			flex={1}
			justifyContent={'center'}
			alignItems={'center'}
			flexDirection={'column'}
		>
			<Icon
				as={IoLockClosedSharp}
				color="goldenrod"
				fontSize={'xxx-large'}
			/>
			<Heading color="fpGrey.700" mt={6}>
				Investor network coming soon
			</Heading>
		</Box>
		// </MainInvestorLayout>
	);
};

export default AuthFilter(Investor);
