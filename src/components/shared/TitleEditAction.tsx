import { Heading } from '@chakra-ui/layout';
import { HeadingProps, IconProps } from '@chakra-ui/react';
import { EditButton } from '@components/buttons';
import { FlexLayout } from '@components/layouts';
import React, { memo } from 'react';

export const TitleEditAction = memo(
	({
		title,
		subtitle,
		onClick,
		icon,
		headerProps
	}: {
		title: string;
		subtitle?: React.ReactNode;
		onClick?: () => void;
		icon?: IconProps;
		headerProps?: HeadingProps;
	}) => (
		<FlexLayout
			{...headerProps}
			justifyContent="space-between"
			alignItems="center"
			flex={1}
			mb={2}
		>
			<FlexLayout flexDirection="column">
				{icon ? (
					<FlexLayout alignItems="center">
						{icon}
						<Heading
							d="flex"
							flex={1}
							css={{ whiteSpace: 'normal' }}
							wordBreak="break-word"
							noOfLines={1}
							isTruncated
							size="h6"
							fontSize="sm"
							color="black"
							ml={icon ? 2 : 0}
						>
							{title}
						</Heading>
					</FlexLayout>
				) : (
					<Heading
						d="flex"
						flex={1}
						css={{ whiteSpace: 'normal' }}
						wordBreak="break-word"
						noOfLines={1}
						isTruncated
						size="h6"
						fontSize="sm"
						color="black"
						ml={icon ? 2 : 0}
					>
						{title}
					</Heading>
				)}
				{subtitle}
			</FlexLayout>

			{onClick && <EditButton onClick={onClick} aria-label="Edit" />}
		</FlexLayout>
	)
);
