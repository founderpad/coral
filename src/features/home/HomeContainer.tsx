import { SimpleGrid } from '@chakra-ui/react';
import { FaPeopleArrows } from 'react-icons/fa';
import {
	IoPersonCircleOutline,
	IoBookOutline,
	IoPeopleCircleOutline,
	IoSendOutline,
	IoNotificationsOutline
} from 'react-icons/io5';
import { HomeCard } from './components';

const HomeContainer = () => {
	return (
		<SimpleGrid
			columns={{ base: 1, md: 2, lg: 3 }}
			columnGap={6}
			rowGap={6}
		>
			<HomeCard
				icon={IoPersonCircleOutline}
				title="Profile"
				content="Fill out your profile and match details to match
								with what you are looking for!"
				href="/account/profile"
			/>
			<HomeCard
				icon={IoBookOutline}
				title="Ideas"
				content="Create a new idea, view others' ideas, and see what takes your interest!"
				href="/ideas/search?page=1"
			/>

			<HomeCard
				icon={IoPeopleCircleOutline}
				href="/users/search?page=1"
				title="Users"
				content="Search users and filter by specific interests!"
			/>
			<HomeCard
				icon={FaPeopleArrows}
				href="/match"
				title="Match"
				content="Fill out your match preferences and discover your closest matches with the skills you are looking for!"
			/>
			<HomeCard
				icon={IoSendOutline}
				href="/messages"
				title="Messages"
				content="Connect directly with other users by messaging them directly!"
			/>
			<HomeCard
				icon={IoNotificationsOutline}
				title="Notifications"
				content="Click on the blue bell icon in the bottom left to subscribe to notifications and see when people have replied!"
			/>
		</SimpleGrid>
	);
};

export default HomeContainer;
