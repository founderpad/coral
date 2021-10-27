import { SubheadingText } from 'components/heading';
import { Label } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import React, { memo } from 'react';

export const PageHeader = memo(
	({
		title,
		subtitle,
		fixedHeader,
		action
	}: {
		title: string;
		subtitle?: React.ReactNode;
		fixedHeader?: boolean;
		action?: React.ReactNode;
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
					<FlexLayout
						justifyContent={'space-between'}
						alignItems={'center'}
					>
						<SubheadingText label={title} />
						{action}
					</FlexLayout>
					{subtitle && (
						<Label
							as="h4"
							fontSize="sm"
							label={subtitle}
							color={'gray.500'}
							fontWeight={'medium'}
						/>
					)}
				</StackLayout>
			</React.Fragment>
		);
	}
);
