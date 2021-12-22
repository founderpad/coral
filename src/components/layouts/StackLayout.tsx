import { Stack, StackProps } from '@chakra-ui/layout';
import React, { forwardRef } from 'react';

export const StackLayout = forwardRef<HTMLDivElement, StackProps>(
	({ ...props }: StackProps, ref): JSX.Element => {
		const { spacing = 6, rounded = 'sm', ...rest } = props;
		return (
			<Stack
				{...rest}
				ref={ref}
				rounded={rounded}
				spacing={spacing}
				css={{ marginTop: 0 }}
			/>
		);
	}
);
