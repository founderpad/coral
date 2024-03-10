import { StackLayout, FlexLayout } from '@/components/layouts';
import { AppDivider } from '@/components/shared';
import ContentFieldAndValue from '@/components/shared/ContentFieldAndValue';
import OverviewTags from '@/components/shared/OverviewTags';
import { TUserProfileFragment } from '@/generated/api';
import { Tag } from '@chakra-ui/react';

export const UserProfileExperience = (
	profileExperience: TUserProfileFragment
) => {
	const {
		availability,
		status,
		startups,
		specialistIndustry,
		objective,
		background,
		statement,
		businessDescription,
		skills
	} = profileExperience;

	return (
		<>
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
				{objective && (
					<ContentFieldAndValue
						title="Looking for"
						value={objective || 'Not set'}
					/>
				)}
				{background && (
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
		</>
	);
};

export default UserProfileExperience;
