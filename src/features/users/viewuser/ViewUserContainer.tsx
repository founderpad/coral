import { StackLayout } from '@/components/layouts';
import { Grid, GridItem } from '@chakra-ui/react';
import { TUserWithProfileFragment } from '@/generated/api';
import { UserDetails, UserProfileExperience } from './components';

const ViewUserContainer = (user: Partial<TUserWithProfileFragment>) => {
	return (
		<Grid
			templateRows="repeat(1, 1fr)"
			templateColumns="repeat(12, 1fr)"
			w="full"
			gridGap={6}
		>
			<GridItem colSpan={{ base: 12, md: 4 }}>
				<UserDetails {...user} />
			</GridItem>
			<GridItem
				colSpan={{ base: 12, md: 8 }}
				as={StackLayout}
				spacing={6}
			>
				<UserProfileExperience {...user?.profile} />
			</GridItem>
		</Grid>
	);
};

export default ViewUserContainer;
