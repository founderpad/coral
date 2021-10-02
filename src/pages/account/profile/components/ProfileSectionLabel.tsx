import { Flex, Text } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { PrimaryLink } from 'components/links';
import React, { memo } from 'react';
import { IconType } from 'react-icons/lib';

const ProfileSectionLabel = memo(
	({ label, icon, children }: { label: string; icon?: IconType, children?: React.ReactNode }) => (
		<Flex alignItems={'center'} wordBreak={'break-all'}>
			{icon && <Icon as={icon} color={'fpGrey.300'} fontSize={'large'} mr={2} />}
			{children ?? <Text title={label} color={'fpGrey.500'} textOverflow={'ellipsis'} fontWeight={'medium'} isTruncated>{label ?? 'Not set'}</Text>}
		</Flex>
	));

const LinkSectionLabel = ({ label, link, icon }: { label: string, link: string, icon: IconType }): JSX.Element => (
	<ProfileSectionLabel label={label} icon={icon}>
		{link && <PrimaryLink title={'Profile link'} href={link} isExternal>{label}</PrimaryLink>}
	</ProfileSectionLabel>
);

export { LinkSectionLabel };
export default ProfileSectionLabel;
