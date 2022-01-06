import { Icon } from '@chakra-ui/react';
import { SubLabel } from 'components/labels';
import { FlexLayout } from 'components/layouts';
import { PrimaryLink } from 'components/links';
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
				<SubLabel
					css={{ whiteSpace: 'normal' }}
					noOfLines={2}
					isTruncated
					color={'gray.500'}
				>
					{label}
				</SubLabel>
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
}): JSX.Element => (
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
