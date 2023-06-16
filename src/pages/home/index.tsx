import { BoxLayout, PageLayout } from '@/components/layouts';
import { PageHtmlHead } from '@/components/shared';
import AuthFilter from '@/utils/AuthFilter';
import { useUserData } from '@nhost/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useChangePasswordModal from '../account/profile/hooks/useChangePasswordModal';
import { List, ListItem, OrderedList, Text } from '@chakra-ui/react';

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
				subtitle="Follow our tips below to get started!"
			>
				<BoxLayout>
					<Text fontWeight="bold" fontSize="lg">
						Profile:
					</Text>
					<OrderedList>
						<ListItem fontSize="sm">
							Click the top right profile section and select
							&quot;Profile&quot;.
						</ListItem>
						<ListItem fontSize="sm">
							In the &quot;Details&quot; tab, you can go through
							and update all fields that you would like to display
							in your profile.
						</ListItem>
						<ListItem fontSize="sm">
							If you would like to use our &quot;Match&quot;
							feature, then select the &quot;Match&quot; tab and
							fill in all fields.
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
							Navigate to ideas by hovering over &quot;Ideas&quot;
							and selecting &quot;Search Ideas&quot;. This will
							display all startup ideas, which can be filtered to
							refine your search.
						</ListItem>
						<ListItem fontSize="sm">
							To post a new idea, click the blue &quot;+ New
							Idea&quot; button at the top, fill out all required
							fields and include all the information you would
							like, and then press &quot;Create Your Idea&quot;,
							and this will publish it.
						</ListItem>
						<ListItem fontSize="sm">
							To see your published idea, hover over
							&quot;Ideas&quot;, and select &quot;My Ideas&quot;.
							This will display any published or unpublished ideas
							you have created, and this is where you can edit
							them.
						</ListItem>
					</OrderedList>
				</BoxLayout>

				<BoxLayout>
					<Text fontWeight="bold" fontSize="lg">
						Users:
					</Text>
					<OrderedList>
						<ListItem fontSize="sm">
							In the top panel, hover over &quot;Users&quot;, and
							select &quot;Search Users&quot;. This is where you
							can see all of the users on the platform.
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
							To filter down the search to find specific users in
							your field of interest, use the filters on the left
							hand panel and select &quot;Show Results&quot; at
							the bottom of the panel.
						</ListItem>
					</List>
				</BoxLayout>

				<BoxLayout>
					<Text fontWeight="bold" fontSize="lg">
						Messages:
					</Text>
					<List>
						<ListItem fontSize="sm">
							In the top panel, select &quot;Messages&quot; and
							this will show you any messages you have sent or
							received from other users on the platform.
						</ListItem>
					</List>
				</BoxLayout>
			</PageLayout>
		</>
	);
};

export default AuthFilter(Home);
