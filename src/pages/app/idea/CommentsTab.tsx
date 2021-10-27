import { Label } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import { PointSeparator, UserAvatar } from 'components/shared';
import React from 'react';

const messages = [
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
	},
	{
		name: 'message 1',
		user: 'Jamie Lee',
		value: 'Some message',
		date: '10 Oct, 21:00'
	}
];

const CommentsTab = (): JSX.Element => {
	return (
		<StackLayout w={'full'}>
			{messages.map((message, _index) => (
				<StackLayout
					key={_index}
					direction={'row'}
					spacing={2}
					w={'full'}
				>
					<UserAvatar size={'sm'} />
					<StackLayout
						w={'full'}
						borderWidth={1}
						p={1}
						rounded={'none'}
						borderBottomRadius={'md'}
						borderTopRightRadius={'md'}
						borderTopLeftRadius={'none'}
						spacing={0}
					>
						<FlexLayout alignItems={'baseline'}>
							{' '}
							<Label
								label={message.value}
								fontSize={'sm'}
								fontWeight={'medium'}
							/>
							<PointSeparator small />
							<Label
								label={message.date}
								color={'gray.400'}
								fontSize={'xs'}
							/>
						</FlexLayout>
						<Label
							label={message.date}
							color={'gray.400'}
							fontSize={'sm'}
						/>
					</StackLayout>
				</StackLayout>
			))}
		</StackLayout>
	);
};

export default CommentsTab;
