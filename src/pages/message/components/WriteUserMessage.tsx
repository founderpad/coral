import { StackProps } from '@chakra-ui/react';
import WriteInput from '@/components/shared/WriteInput';
import { useNewMessageMutation } from '@generated/api';
import React, { useState } from 'react';

const WriteUserMessage = ({
	threadId,
	stackProps
}: {
	threadId: string;
	stackProps?: StackProps;
}) => {
	const [value, setValue] = useState('');
	const [createNewMessage] = useNewMessageMutation({
		variables: {
			content: value,
			messageThreadId: threadId
		},
		onCompleted: () => {
			setValue('');
		},
		awaitRefetchQueries: true
	});

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		setValue(value);
	};

	return (
		<WriteInput
			value={value}
			onChange={onChange}
			onClick={() => createNewMessage()}
			stackProps={{
				padding: 4,
				...stackProps
			}}
		/>
	);
};

export default WriteUserMessage;
