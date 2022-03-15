import { Grid, GridItem } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/react';
import {
	IoCalendarOutline,
	IoLocationOutline,
	IoTimeOutline
} from '@components/icons';
import { FlexLayout, PageLayout, StackLayout } from '@components/layouts';
import { DocumentTitle, TitleEditAction, UserAvatar } from '@components/shared';
import AppDivider from '@components/shared/AppDivider';
import ContentFieldAndValue from '@components/shared/ContentFieldAndValue';
import OverviewTags from '@components/shared/OverviewTags';
import PronounsLabel from '@components/shared/PronounsLabel';
import { useUserProfileDetailsQuery } from '@generated/api';
import { useQueryParam } from '@hooks/util';
import ProfileSectionLabel from '@pages/account/profile/components/ProfileSectionLabel';
import AuthFilter from '@utils/AuthFilter';
import { formatDate } from '@utils/validators';
import { NextPage } from 'next';
import React from 'react';
import Actions from './components/Actions';
// import AddFollower from './components/AddFollower';

const User: NextPage = () => {
	const { data } = useUserProfileDetailsQuery({
		variables: {
			userId: useQueryParam('id')
		}
	});

	const { user } = data ?? {};
	const {
		profile,
		address,
		displayName = '',
		avatarUrl,
		createdAt,
		lastSeen
	} = user ?? {};
	const {
		pronouns,
		customPronouns,
		specialistIndustry,
		startups,
		status,
		availability,
		background,
		objective,
		statement,
		businessDescription,
		skills
	} = profile ?? {};
	const { location, country } = address ?? {};

	return (
		<React.Fragment>
			<DocumentTitle title="View user" />
			<PageLayout
				title={`${displayName}'s profile`}
				action={<Actions />}
				borderWidth={{ base: 0, lg: 1 }}
				borderColor="fpLightGrey.900"
			>
				<Grid
					templateRows="repeat(1, 1fr)"
					templateColumns="repeat(12, 1fr)"
					template
					w="full"
					gridGap={6}
				>
					<GridItem colSpan={{ base: 12, md: 4 }}>
						<StackLayout w="full">
							<UserAvatar
								src={avatarUrl || undefined}
								boxSize={{ base: 100, md: 120 }}
								aria-label="Edit profile picture"
							/>
							<TitleEditAction
								title={displayName}
								subtitle={
									<PronounsLabel
										pronouns={pronouns}
										customPronouns={customPronouns}
									/>
								}
							/>
							<StackLayout spacing={2}>
								{/* <ProfileSectionLabel
									label="*****************.com"
									icon={IoMailOutline}
								/> */}

								{data?.user?.address && (
									<ProfileSectionLabel
										label={
											location
												? `${location}, ${country}`
												: country
												? country
												: 'Location not set'
										}
										icon={IoLocationOutline}
									/>
								)}
								{createdAt && (
									<ProfileSectionLabel
										label={
											`Joined ` +
											formatDate(createdAt, false, true)
										}
										icon={IoCalendarOutline}
									/>
								)}
								{data?.user?.createdAt && (
									<ProfileSectionLabel
										label={
											`Last seen ` +
											(lastSeen
												? formatDate(
														lastSeen,
														undefined,
														undefined,
														false
												  )
												: formatDate(
														createdAt,
														undefined,
														undefined,
														false
												  ))
										}
										icon={IoTimeOutline}
									/>
								)}
							</StackLayout>
						</StackLayout>
					</GridItem>
					<GridItem
						colSpan={{ base: 12, md: 8 }}
						as={StackLayout}
						spacing={6}
					>
						<AppDivider display={{ md: 'none' }} />

						<OverviewTags
							tags={[
								{
									title: 'Specialist field',
									value: specialistIndustry || 'Not set'
								},
								{
									title: 'Previous startups',
									value: startups || 'Not set'
								},
								{
									title: 'Startup status',
									value: status || 'Not set'
								},
								{
									title: 'Capacity (Hours per week)',
									value: availability || 'Not set'
								}
							]}
						/>
						<AppDivider />
						<StackLayout flex={1}>
							{data?.user?.profile?.objective && (
								<ContentFieldAndValue
									title="Looking for"
									value={objective || 'Not set'}
								/>
							)}
							{data?.user?.profile?.background && (
								<ContentFieldAndValue
									title="Background"
									value={background || 'Not set'}
								/>
							)}

							<ContentFieldAndValue
								title="Statement"
								value={statement || 'Not set'}
							/>

							<ContentFieldAndValue
								title="Overview of businesses"
								value={businessDescription || 'Not set'}
							/>

							{/* {data?.user?.profile?.skills && (
								<ContentFieldAndValue
									title="Skills"
									value={
										data?.user?.profile?.skills?.join(
											', '
										) ?? 'No skills selected'
									}
								/>
							)} */}

							<ContentFieldAndValue
								title="Skills"
								value={
									skills?.length ? (
										<FlexLayout
											flexWrap="wrap"
											direction="row"
											alignItems="center"
										>
											{skills?.map((skill: string) => (
												<Tag
													fontSize="xs"
													mr={2}
													mb={2}
													key={skill}
												>
													{skill}
												</Tag>
											))}
										</FlexLayout>
									) : (
										'No skills selected'
									)
								}
							/>
						</StackLayout>
					</GridItem>
				</Grid>
			</PageLayout>
		</React.Fragment>
	);
};

export default AuthFilter(User);
