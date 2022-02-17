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
								boxSize={{ base: 100, md: 120 }}
								aria-label="Edit profile picture"
							/>
							<TitleEditAction
								title={`${data?.user?.displayName}`}
							/>
							<StackLayout spacing={2}>
								{/* <ProfileSectionLabel
									label={'*****************.com'}
									icon={IoMailOutline}
								/> */}

								{data?.user?.address && (
									<ProfileSectionLabel
										label={
											data?.user?.address?.location
												? `${data?.user?.address?.location}, ${data?.user?.address?.country}`
												: data?.user?.address?.country
												? data?.user?.address?.country
												: 'Location not set'
										}
										icon={IoLocationOutline}
									/>
								)}
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
										icon={IoCalendarOutline}
									/>
								)}
								{data?.user?.createdAt && (
									<ProfileSectionLabel
										label={
											`Last seen ` +
											formatDate(data?.user.lastSeen)
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
									value: data?.user?.profile
										?.specialistIndustry
								},
								{
									title: 'Previous startups',
									value:
										data?.user?.profile?.startups &&
										`${data?.user.profile.startups} startups`
								},
								{
									title: 'Startup status',
									value: data?.user?.profile?.status
								},
								{
									title: 'Capacity (Hours per week)',
									value: data?.user?.profile?.availability
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
							{/* {data?.user?.profile?.skills && (
								<ContentFieldAndValue
									title={'Skills'}
									value={
										data?.user?.profile?.skills?.join(
											', '
										) ?? 'No skills selected'
									}
								/>
							)} */}

							<ContentFieldAndValue
								title={'Skills'}
								value={
									data?.user?.profile?.skills.length ? (
										<FlexLayout
											flexWrap={'wrap'}
											direction={'row'}
											alignItems={'center'}
										>
											{data?.user?.profile?.skills?.map(
												(skill: string) => (
													<Tag
														fontSize={'xs'}
														mr={2}
														mb={2}
													>
														{skill}
													</Tag>
												)
											)}
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
