import { Avatar } from '@chakra-ui/avatar';
import { AvatarProps, Text } from '@chakra-ui/react';
import { FlexLayout, StackLayout } from '@/components/layouts';
import React, { memo } from 'react';
import { PointSeparator } from './Separators';

interface AvatarWithDetailsProps {
	title?: string;
	row?: boolean;
	center?: boolean;
	subtitle?: string | JSX.Element;
	actions?: JSX.Element;
	small?: boolean;
	avatarProps?: AvatarProps;
	src?: string;
	noSpacing?: boolean;
}

export const AvatarWithDetails = memo((props: AvatarWithDetailsProps) => {
	const {
		row = false,
		center = false,
		title,
		actions,
		small = false,
		noSpacing = false,
		subtitle,
		avatarProps
	} = props;
	return (
		<StackLayout
			direction={row ? 'row' : 'column'}
			spacing={noSpacing ? 0 : 3}
			alignItems={!row && center ? 'center' : 'initial'}
		>
			<Avatar
				size={small ? 'sm' : 'md'}
				ignoreFallback={false}
				{...avatarProps}
			/>
			<StackLayout
				spacing={0}
				alignItems={!row && center ? 'center' : 'initial'}
				justifyContent={row ? 'center' : 'inherit'}
			>
				<FlexLayout alignItems="center">
					<Text color="black" fontSize="small">
						{title}
					</Text>
					{actions && (
						<>
							<PointSeparator small />
							{actions}
						</>
					)}
				</FlexLayout>
				{typeof subtitle === 'string' ? (
					<Text color="fpGrey.500" fontSize="xs">
						{subtitle}
					</Text>
				) : (
					subtitle
				)}
			</StackLayout>
		</StackLayout>
	);
});
