import { Grid, GridItem } from '@chakra-ui/layout';
import { PageLayout, StackLayout } from 'components/layouts';
import { DocumentTitle, TitleEditAction, UserAvatar } from 'components/shared';
import AppDivider from 'components/shared/AppDivider';
import ContentFieldAndValue from 'components/shared/ContentFieldAndValue';
import OverviewTags from 'components/shared/OverviewTags';
import { useUserProfileDetailsQuery } from 'generated/api';
import { useQueryParam } from 'hooks/util';
import ProfileSectionLabel from 'pages/account/profile/components/ProfileSectionLabel';
import React from 'react';
import {
	IoAnalyticsSharp,
	IoBulbSharp,
	IoLocationSharp,
	IoMailSharp,
	IoRocketSharp,
	IoTimeSharp
} from 'react-icons/io5';
import AuthFilter from 'utils/AuthFilter';
import { convertCapacityToString, formatDate } from 'utils/validators';
import AddFollower from './components/AddFollower';

const User = (): JSX.Element => {
	const { data } = useUserProfileDetailsQuery({
		variables: {
			user_id: useQueryParam('id')
		}
	});

	return (
		<React.Fragment>
			<DocumentTitle title="View user" />
			<PageLayout
				title={`${data?.user.first_name}'s profile`}
				action={<AddFollower userId={useQueryParam('id')} />}
			>
				<Grid
					templateRows="repeat(1, 1fr)"
					templateColumns="repeat(12, 1fr)"
					template
					w={'full'}
					gridGap={6}
				>
					<GridItem colSpan={{ base: 12, md: 4 }}>
						<StackLayout w={'full'}>
							<UserAvatar
								src={data?.user?.avatar_url}
								boxSize={140}
								aria-label="Edit profile picture"
							/>
							<TitleEditAction
								title={`${data?.user.first_name} ******`}
							/>
							<StackLayout spacing={2}>
								{data?.user?.country && (
									<ProfileSectionLabel
										label={
											data?.user?.location
												? `${data?.user?.location}, ${data?.user?.country}`
												: data?.user?.country
												? data?.user?.country
												: 'Location not set'
										}
										icon={IoLocationSharp}
									/>
								)}
								<ProfileSectionLabel
									label={'*****************.com'}
									icon={IoMailSharp}
								/>
								{data?.user.created_at && (
									<ProfileSectionLabel
										label={
											`Joined ` +
											formatDate(
												data?.user.created_at,
												false,
												true
											)
										}
										icon={IoTimeSharp}
									/>
								)}
								{data?.user.created_at && (
									<ProfileSectionLabel
										label={
											`Last seen ` +
											formatDate(
												data?.user.last_logged_in
											)
										}
										icon={IoTimeSharp}
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
									value:
										data?.user.user_profile
											.specialist_industry ?? 'Not set',
									icon: IoBulbSharp
								},
								{
									title: 'Previous startups',
									value: data?.user.user_profile.startups
										? `${data?.user.user_profile.startups} startups`
										: 'Not set',
									icon: IoRocketSharp
								},
								{
									title: 'Startup status',
									value:
										data?.user.user_profile.status ??
										'Not set',
									icon: IoAnalyticsSharp
								},
								{
									title: 'Hours per week',
									value: data?.user.user_profile.availability
										? `${convertCapacityToString(
												data?.user.user_profile
													.availability
										  )} hours`
										: 'Not set',
									icon: IoTimeSharp
								}
							]}
						/>
						<AppDivider />
						<StackLayout flex={1}>
							{data?.user.user_profile.background && (
								<ContentFieldAndValue
									title={'Background'}
									value={data?.user.user_profile.background}
								/>
							)}
							{data?.user.user_profile.statement && (
								<ContentFieldAndValue
									title={'Statement'}
									value={data?.user.user_profile.statement}
								/>
							)}
							{data?.user.user_profile.business_description && (
								<ContentFieldAndValue
									title={'Overview of businesses'}
									value={
										data?.user.user_profile
											.business_description
									}
								/>
							)}
							{data?.user.user_profile.skills && (
								<ContentFieldAndValue
									title={'Skills'}
									value={
										data?.user.user_profile.skills?.join(
											', '
										) ?? 'No skills selected'
									}
								/>
							)}
						</StackLayout>
					</GridItem>
				</Grid>
			</PageLayout>
		</React.Fragment>
	);
};

export default AuthFilter(User);
