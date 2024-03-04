import { PageLayout } from '@/components/layouts';
import { PageHtmlHead } from '@/components/shared';
import AuthFilter from '@/utils/AuthFilter';
import { useUserData } from '@nhost/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useChangePasswordModal from '../account/profile/hooks/changepassword';
import { SimpleGrid } from '@chakra-ui/react';
import {
	IoBookOutline,
	IoNotificationsOutline,
	IoPeopleCircleOutline,
	IoPersonCircleOutline,
	IoSendOutline
} from 'react-icons/io5';
import HomeCard from './components/HomeCard';
import { FaPeopleArrows } from 'react-icons/fa';

const Home: NextPage = () => {
	const user = useUserData();
	const router = useRouter();
	const { onOpenModal } = useChangePasswordModal();

	useEffect(() => {
		if (router.query['resetpassword'] !== undefined) {
			onOpenModal();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<PageHtmlHead
				title="Home"
				pageSlug="/home"
				description={`Welcome back, ${user?.displayName}`}
			/>
			<PageLayout
				title={`Hi, ${user?.displayName}`}
				subtitle="Get started below!"
			>
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
				{/* <BoxLayout>
					<Text fontWeight="bold" fontSize="lg">
						Profile:
					</Text>
					<OrderedList>
						<ListItem fontSize="sm">
							Click the top right profile section and select{' '}
							<Text as={BaseLink} href="/account/profile">
								Profile
							</Text>
							.
						</ListItem>
						<ListItem fontSize="sm">
							In the{' '}
							<Text as={BaseLink} href="/account/profile">
								Details
							</Text>{' '}
							tab, you can go through and update all fields that
							you would like to display in your profile.
						</ListItem>
						<ListItem fontSize="sm">
							If you would like to use our{' '}
							<Text as={BaseLink} href="/match">
								Match
							</Text>{' '}
							feature, then select the{' '}
							<Text as={BaseLink} href="/match">
								Match
							</Text>{' '}
							tab and fill in all fields.
						</ListItem>
						<ListItem fontSize="sm">
							Once your profile is setup, you will find it easier
							to match with and find exactly what you are looking
							for, and you can begin your search.
						</ListItem>
					</OrderedList>
				</BoxLayout>

				<BoxLayout>
					<Text fontWeight="bold" fontSize="lg">
						Ideas:
					</Text>
					<OrderedList>
						<ListItem fontSize="sm">
							Navigate to ideas by hovering over{' '}
							<Text as={BaseLink} href="/ideas/search?page=1">
								Ideas
							</Text>{' '}
							and selecting{' '}
							<Text as={BaseLink} href="/ideas/search?page=1">
								Search Ideas
							</Text>
							. This will display all startup ideas, which can be
							filtered to refine your search.
						</ListItem>
						<ListItem fontSize="sm">
							To post a new idea, click the blue{' '}
							<Text as={BaseLink} href="/ideas/create">
								+ New Idea
							</Text>{' '}
							button at the top, fill out all required fields and
							include all the information you would like, and then
							press &quot;Create Your Idea&quot;, and this will
							publish it.
						</ListItem>
						<ListItem fontSize="sm">
							To see your published idea, hover over{' '}
							<Text as={BaseLink} href="/ideas/myideas">
								Ideas
							</Text>
							, and select{' '}
							<Text as={BaseLink} href="/ideas/myideas">
								My Ideas
							</Text>
							. This will display any published or unpublished
							ideas you have created, and this is where you can
							edit them.
						</ListItem>
					</OrderedList>
				</BoxLayout>

				<BoxLayout>
					<Text fontWeight="bold" fontSize="lg">
						Users:
					</Text>
					<OrderedList>
						<ListItem fontSize="sm">
							In the top panel, hover over{' '}
							<Text as={BaseLink} href="/users/search?page=1">
								Users
							</Text>
							, and select{' '}
							<Text as={BaseLink} href="/users/search?page=1">
								Search Users
							</Text>
							. This is where you can see all of the users on the
							platform.
						</ListItem>
						<ListItem fontSize="sm">
							To filter down the search to find specific users in
							your field of interest, use the filters on the left
							hand panel and select &quot;Show Results&quot; at
							the bottom of the panel.
						</ListItem>
					</OrderedList>
				</BoxLayout>

				<BoxLayout>
					<Text fontWeight="bold" fontSize="lg">
						Match:
					</Text>
					<List>
						<ListItem fontSize="sm">
							Match will only work if you fill out the Match
							details tab in your profile section, and this will
							show your closest matches to what you are looking
							for on Founderpad.
						</ListItem>
					</List>
				</BoxLayout>

				<BoxLayout>
					<Text fontWeight="bold" fontSize="lg">
						Messages:
					</Text>
					<List>
						<ListItem fontSize="sm">
							In the top panel, select{' '}
							<Text as={BaseLink} href="/messages">
								Messages
							</Text>{' '}
							and this will show you any messages you have sent or
							received from other users on the platform.
						</ListItem>
					</List>
				</BoxLayout> */}
			</PageLayout>
		</>
	);
};

export default AuthFilter(Home);
