import Icon from '@chakra-ui/icon';
import { Box, Heading } from '@chakra-ui/layout';
import MainInvestorLayout from 'components/layouts/MainInvestorLayout';
import React from 'react';
import { IoLockClosedSharp } from 'react-icons/io5';
import AuthFilter from 'utils/AuthFilter';

const Investor = () => {
	return (
		<MainInvestorLayout>
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
		</MainInvestorLayout>
	);
};

export default AuthFilter(Investor);