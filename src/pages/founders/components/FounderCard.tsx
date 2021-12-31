import { FlexLayout, StackLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { UserAvatarDetails } from 'components/shared';
import { TUser_Profile } from 'generated/api';
import React from 'react';
import { formatDate } from 'utils/validators';

const FounderCard = (founderProfile: TUser_Profile) => {
	return (
		<StackLayout flex={1} spacing={0}>
			<FlexLayout
				flexDirection={'column'}
				as={BaseLink}
				href={`/user/${founderProfile.user.id}`}
				alignItems={'flex-start'}
				_hover={{
					borderColor: 'gray.50',
					transition: 'ease-in .3s',
					bg: 'gray.50'
				}}
				p={2}
				mb={2}
				flex={1}
				rounded={'sm'}
			>
				<UserAvatarDetails
					name={founderProfile.user.first_name}
					createdAt={`Joined ${formatDate(
						founderProfile.user.created_at
					)}`}
					size={'md'}
				/>
				<StackLayout direction={'row'} pt={4}>
					{/* {founderProfile.availability && (
						<FlexLayout
							alignItems={'center'}
							fontSize={'small'}
							color={'gray.500'}
						>
							<Icon
								as={IoTimeSharp}
								color={'gray.500'}
								fontSize={'md'}
								mr={2}
							/>{' '}
							{convertCapacityToString(
								founderProfile.availability
							)}{' '}
							hours to work on a new idea
						</FlexLayout>
					)} */}

					{/* <Label fontSize={'xs'}>
						{founderProfile.availability > 0 &&
							convertCapacityToString(
								founderProfile.availability
							) + ' hours'}
					</Label>
					<Label fontSize={'xs'}>{founderProfile.status}</Label> */}
				</StackLayout>
			</FlexLayout>
		</StackLayout>
	);
};

export default FounderCard;
