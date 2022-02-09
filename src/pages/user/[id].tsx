import { Grid, GridItem } from '@chakra-ui/layout';
import {
	IoAnalyticsSharp,
	IoBulbSharp,
	IoMailSharp,
	IoRocketSharp,
	IoTimeSharp
} from '@components/icons';
import { PageLayout, StackLayout } from '@components/layouts';
import { DocumentTitle, TitleEditAction, UserAvatar } from '@components/shared';
import AppDivider from '@components/shared/AppDivider';
import ContentFieldAndValue from '@components/shared/ContentFieldAndValue';
import OverviewTags from '@components/shared/OverviewTags';
import { useUserProfileDetailsQuery } from '@generated/api';
import { useQueryParam } from '@hooks/util';
import ProfileSectionLabel from '@pages/account/profile/components/ProfileSectionLabel';
import AuthFilter from '@utils/AuthFilter';
import { formatDate } from '@utils/validators';
import React from 'react';
// import AddFollower from './components/AddFollower';

const User = () => {
	const { data } = useUserProfileDetailsQuery({
		variables: {
			userId: useQueryParam('id')
		}
	});

	return (
		<React.Fragment>
			<DocumentTitle title="View user" />
			<PageLayout
				title={`${data?.user?.displayName}'s profile`}
				// action={<AddFollower userId={useQueryParam('id')} />}
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
								src={data?.user?.avatarUrl || undefined}
								boxSize={140}
								aria-label="Edit profile picture"
							/>
							<TitleEditAction
								title={`${data?.user?.displayName}`}
							/>
							<StackLayout spacing={2}>
								{/* {data?.user?.country && (
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
								)} */}
								<ProfileSectionLabel
									label={'*****************.com'}
									icon={IoMailSharp}
								/>
								{data?.user?.createdAt && (
									<ProfileSectionLabel
										label={
											`Joined ` +
											formatDate(
												data?.user.createdAt,
												false,
												true
											)
										}
										icon={IoTimeSharp}
									/>
								)}
								{data?.user?.createdAt && (
									<ProfileSectionLabel
										label={
											`Last seen ` +
											formatDate(data?.user.lastSeen)
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
										data?.user?.profile
											?.specialistIndustry ?? 'Not set',
									icon: IoBulbSharp
								},
								{
									title: 'Previous startups',
									value: data?.user?.profile?.startups
										? `${data?.user.profile.startups} startups`
										: 'Not set',
									icon: IoRocketSharp
								},
								{
									title: 'Startup status',
									value:
										data?.user?.profile?.status ??
										'Not set',
									icon: IoAnalyticsSharp
								},
								{
									title: 'Capacity (Hours per week)',
									value:
										data?.user?.profile?.availability ??
										'Not set',
									icon: IoTimeSharp
								}
							]}
						/>
						<AppDivider />
						<StackLayout flex={1}>
							{data?.user?.profile?.background && (
								<ContentFieldAndValue
									title={'Background'}
									value={data?.user.profile.background}
								/>
							)}
							{data?.user?.profile?.statement && (
								<ContentFieldAndValue
									title={'Statement'}
									value={data?.user.profile.statement}
								/>
							)}
							{data?.user?.profile?.businessDescription && (
								<ContentFieldAndValue
									title={'Overview of businesses'}
									value={
										data?.user.profile.businessDescription
									}
								/>
							)}
							{data?.user?.profile?.skills && (
								<ContentFieldAndValue
									title={'Skills'}
									value={
										data?.user?.profile?.skills?.join(
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
