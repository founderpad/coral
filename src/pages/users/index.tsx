import { Box, Icon, Heading } from '@chakra-ui/react';
import { DocumentTitle } from '@components/shared';
import AuthFilter from '@utils/AuthFilter';
import React from 'react';
import { IoPeople } from 'react-icons/io5';

const Founders = () => (
	<React.Fragment>
		<DocumentTitle title="All users" />
		{/* <PageLayout title="All users"> */}
		{/* <SearchContentGridLayout>
				<FounderSearchForm />
				<FoundersContainer />
			</SearchContentGridLayout> */}
		<Box
			d={'flex'}
			flex={1}
			justifyContent={'center'}
			alignItems={'center'}
			flexDirection={'column'}
		>
			<Box
				d={'flex'}
				flex={1}
				justifyContent={'center'}
				alignItems={'center'}
				flexDirection={'column'}
			>
				<Icon
					as={IoPeople}
					fontSize={'xx-large'}
					color={'gray.500'}
					mb={4}
				/>
				<Heading color={'gray.500'} fontSize={'lg'}>
					Users coming soon
				</Heading>
			</Box>
		</Box>
		{/* </PageLayout> */}
	</React.Fragment>
);

export default AuthFilter(Founders);
