import { Icon } from '@chakra-ui/react';
import { BaseLabel } from '@components/labels/BaseLabel';
import { FlexLayout } from '@components/layouts';
import { PrimaryLink } from '@components/links';
import React, { memo } from 'react';
import { IconType } from 'react-icons/lib';

const ProfileSectionLabel = memo(
	({
		label = 'Not set',
		icon,
		children
	}: {
		label: string;
		icon?: IconType;
		children?: React.ReactNode;
	}) => (
		<FlexLayout alignItems={'center'} wordBreak={'break-all'}>
			{icon && <Icon as={icon} color={'gray.500'} mr={2} />}
			{children ?? (
				<BaseLabel
					css={{ whiteSpace: 'normal' }}
					noOfLines={2}
					isTruncated
				>
					{label}
				</BaseLabel>
			)}
		</FlexLayout>
	)
);

const LinkSectionLabel = ({
	label,
	link,
	icon
}: {
	label: string;
	link: string;
	icon: IconType;
}) => (
	<ProfileSectionLabel label={label} icon={icon}>
		{link && (
			<PrimaryLink
				title={'Profile link'}
				size={'xs'}
				href={link}
				isExternal
			>
				{label}
			</PrimaryLink>
		)}
	</ProfileSectionLabel>
);

export { LinkSectionLabel };
export default ProfileSectionLabel;
