import { StackLayout } from '@/components/layouts';
import { Text } from '@chakra-ui/react';
import React, { memo } from 'react';

interface Props {
	title?: string;
	value?: React.ReactNode | string;
}

const ContentFieldAndValue = memo(({ title, value }: Props) => {
	return (
		<StackLayout spacing={1} wordBreak="break-word">
			{title && (
				<Text color="black" fontSize="small">
					{title}
				</Text>
			)}
			{typeof value === 'string' || !value ? (
				<Text color="gray.500" fontSize="xs">
					{value || 'Not set'}
				</Text>
			) : (
				value || 'Not set'
			)}
		</StackLayout>
	);
});

export default ContentFieldAndValue;
