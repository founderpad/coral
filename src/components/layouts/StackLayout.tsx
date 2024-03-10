import { Stack, StackProps } from '@chakra-ui/layout';
import React, { forwardRef } from 'react';

const StackLayout = forwardRef<HTMLDivElement, StackProps & { href?: string }>(
	(props: StackProps, ref) => {
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

export default StackLayout;
