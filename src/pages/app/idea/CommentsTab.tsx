import Icon from '@chakra-ui/icon';
import { BaseButton } from 'components/buttons';
import { Label } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import { PointSeparator, UserAvatar } from 'components/shared';
import React from 'react';
import { IoArrowUpSharp } from 'react-icons/io5';

const comments = [
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'I really like the premise of the idea, but have you considered x, y and z? The only reason I raise this is because you are potentially entering a very saturated market. It is a great idea though!! :)',
		date: '10 Oct, 21:00'
	},
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'Some message',
		date: '10 Oct, 21:00'
	},
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'Some message',
		date: '10 Oct, 21:00'
	},
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'Some message',
		date: '10 Oct, 21:00'
	},
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'Some message',
		date: '10 Oct, 21:00'
	},
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'Some message',
		date: '10 Oct, 21:00'
	},
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'Some message',
		date: '10 Oct, 21:00'
	},
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'Some message',
		date: '10 Oct, 21:00'
	},
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'Some message',
		date: '10 Oct, 21:00'
	},
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'Some message',
		date: '10 Oct, 21:00'
	},
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'Some message',
		date: '10 Oct, 21:00'
	},
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'Some message',
		date: '10 Oct, 21:00'
	}
];

const replies = [
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'I really like the premise of the idea, but have you considered x, y and z? The only reason I raise this is because you are potentially entering a very saturated market. It is a great idea though!! :)',
		date: '10 Oct, 21:00'
	},
	{
		name: 'message 1',
		user: 'Bob Jones',
		value: 'Some message',
		date: '10 Oct, 21:00'
	}
];

const MessageLayout = ({
	name,
	date,
	value,
	children,
	actions = true,
	divider = false
}: {
	name: string;
	date: string;
	value: string;
	children?: JSX.Element;
	actions?: boolean;
	divider?: boolean;
}) => (
	<>
		{/* <Divider orientation={'vertical'} /> */}
		<StackLayout
			direction={'row'}
			spacing={2}
			w={'full'}
			rounded={'none'}
			borderLeftWidth={divider && 4}
			pl={4}
		>
			{/* <Divider orientation={'vertical'} /> */}
			<UserAvatar size={'sm'} />
			<StackLayout spacing={0}>
				<StackLayout
					px={2}
					py={1}
					rounded={'none'}
					borderWidth={1}
					borderColor={'gray.100'}
					borderBottomRadius={'md'}
					borderTopRightRadius={'md'}
					borderTopLeftRadius={'none'}
					bg={'gray.50'}
					spacing={0}
				>
					<FlexLayout alignItems={'baseline'}>
						{' '}
						<Label fontSize={'sm'} fontWeight={'medium'}>
							{name}
						</Label>
						<PointSeparator small />
						<Label color={'gray.400'} fontSize={'xs'}>
							{date}
						</Label>
					</FlexLayout>
					<Label color={'gray.500'} fontSize={'sm'}>
						{value}
					</Label>
				</StackLayout>
				{actions && <Actions />}
				{children}
			</StackLayout>
		</StackLayout>
	</>
);

const CommentsTab = (): JSX.Element => (
	<StackLayout w={'full'} spacing={8}>
		<CommentsList />
	</StackLayout>
);

const CommentsList = () => (
	<>
		{comments.map((comment, _index) => (
			<Comment key={_index} {...comment} />
		))}
	</>
);

const RepliesList = () => (
	<StackLayout spacing={4} pt={4} borderLeftWidth={2} rounded={'none'} pl={4}>
		{replies.map((reply, _index) => (
			<MessageLayout
				key={_index}
				name={reply.name}
				date={reply.date}
				value={reply.value}
				actions={false}
			/>
		))}
	</StackLayout>
);

const Comment = (message: any) => (
	<MessageLayout
		name={message.name}
		date={message.date}
		value={message.value}
		divider={true}
	>
		<RepliesList />
	</MessageLayout>
);

const Actions = () => (
	<StackLayout direction={'row'} spacing={1} alignItems={'center'}>
		<BaseButton name={'upvote-idea-button'} variant={'unstyled'} d={'flex'}>
			<Icon
				as={IoArrowUpSharp}
				fontSize={'sm'}
				mr={1}
				size={'sm'}
				fontWeight={'normal'}
				color={'gray.400'}
			/>
		</BaseButton>
		<BaseButton
			name={'reply-button'}
			variant={'unstyled'}
			fontSize={'small'}
		>
			Reply
		</BaseButton>
	</StackLayout>
);

export default CommentsTab;
