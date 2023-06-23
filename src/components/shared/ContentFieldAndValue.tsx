import { StackLayout } from '@/components/layouts';
import { Text } from '@chakra-ui/react';
import React, { memo } from 'react';

interface Props {
	title?: string;
	value?: any;
}

const ContentFieldAndValue = memo(({ title, value = 'Not set' }: Props) => {
	return (
		<StackLayout spacing={1} wordBreak="break-word">
			{title && (
				<Text color="black" fontSize="small">
					{title}
				</Text>
			)}
			{typeof value === 'string' ? (
				<Text color="gray.500" fontSize="xs">
					{value}
				</Text>
			) : (
				value
			)}
		</StackLayout>
	);
});

export default ContentFieldAndValue;
