import {
	Textarea,
	IconButton,
	Icon,
	StackProps,
	IconButtonProps
} from '@chakra-ui/react';
import { StackLayout } from '@/components/layouts';
import React from 'react';
import { IoSendSharp } from 'react-icons/io5';
import ResizeTextarea from 'react-textarea-autosize';
import { IconType } from 'react-icons/lib';
import { AvatarWithDetails } from './UserAvatar';
import { useUserData } from '@nhost/react';

type Props = {
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void | undefined;
	value: string;
	onClick: (value: React.MouseEvent) => void;
	placeholder?: string;
	stackProps?: StackProps;
	buttons?: {
		colorScheme?: IconButtonProps['colorScheme'] | 'fpPrimary';
		icon: IconType | typeof IoSendSharp;
	};
};

const WriteInput = (props: Props) => {
	const {
		onChange,
		onClick,
		value,
		placeholder = 'Write your comment here',
		stackProps
	} = props;

	const user = useUserData();

	return (
		<StackLayout
			spacing={2}
			display="flex"
			justifyContent="flex-end"
			alignItems="center"
			w="full"
			{...stackProps}
		>
			<StackLayout
				direction="row"
				spacing={2}
				w="full"
				alignItems="center"
			>
				<AvatarWithDetails src={user?.avatarUrl} noSpacing small row />
				<Textarea
					name="value"
					id="value"
					placeholder={placeholder}
					w="full"
					as={ResizeTextarea}
					onChange={onChange}
					value={value}
					borderBottomWidth={2}
					borderColor="white"
					maxRows={2}
					resize="none"
					minRows={1}
					minH="full"
					p={2}
					title={placeholder}
					_hover={{
						borderColor: 'transparent'
					}}
					_focus={{
						borderColor: 'transparent'
					}}
				/>

				<IconButton
					aria-label="send-message"
					variant="ghost"
					colorScheme="fpPrimary"
					title="Send message"
					type="submit"
					onClick={onClick}
					visibility={value?.length ? 'visible' : 'hidden'}
				>
					<Icon as={IoSendSharp} />
				</IconButton>
			</StackLayout>
		</StackLayout>
	);
};

export default WriteInput;
