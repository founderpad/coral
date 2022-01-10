import { Icon } from '@chakra-ui/react';
import { Label } from 'components/labels';
import BaseTag from 'components/tags/BaseTag';
import React from 'react';
import { IconType } from 'react-icons/lib';

interface IOverviewTag {
	title: string;
	value: string;
	icon?: IconType;
	// direction?: StackProps['direction'];
}

export const OverviewTag = ({ title, value, icon }: IOverviewTag) => (
	<BaseTag
		p={2}
		d={'flex'}
		alignItems={'center'}
		flexDirection={'column'}
		bg={'fpPrimary.50'}
		borderWidth={0}
		alignSelf={'stretch'}
		justifyContent={'center'}
		minW={'100px'}
	>
		<Label
			fontSize={'xs'}
			color={'fpPrimary.700'}
			alignItems={'center'}
			mb={1}
		>
			<Icon as={icon} fontSize={'sm'} mr={1} />
			{value}
		</Label>
		<Label color={'gray.400'} fontSize={'xs'}>
			{title}
		</Label>
	</BaseTag>
);

export default OverviewTag;
