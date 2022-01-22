import { AlertFeedback } from '@components/alert';
import { GoBackButton } from '@components/buttons';
import { SubheadingText } from '@components/heading';
import { Label } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
import React, { memo } from 'react';

export const PageHeader = memo(
	({
		title,
		subtitle,
		fixedHeader,
		action,
		back
	}: {
		title: string;
		subtitle?: React.ReactNode;
		fixedHeader?: boolean;
		action?: React.ReactNode;
		back?: boolean;
	}) => {
		return (
			<React.Fragment>
				<StackLayout
					as={'header'}
					bg={'transparent'}
					p={{ base: 4 }}
					position={fixedHeader ? 'fixed' : 'inherit'}
					top={0}
					w={'full'}
					spacing={0}
				>
					{back && <GoBackButton />}
					<FlexLayout
						justifyContent={'space-between'}
						alignItems={'center'}
					>
						<SubheadingText>{title}</SubheadingText>
						{action}
					</FlexLayout>
					{subtitle && (
						<Label
							as="h4"
							fontSize="sm"
							color={'gray.500'}
							fontWeight={'medium'}
						>
							{subtitle}
						</Label>
					)}
					<AlertFeedback />
				</StackLayout>
			</React.Fragment>
		);
	}
);
