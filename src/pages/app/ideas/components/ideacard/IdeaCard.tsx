import Icon from '@chakra-ui/icon';
import { BaseButton } from 'components/buttons';
import { Label } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import { IoArrowDownSharp, IoArrowUpSharp } from 'react-icons/io5';
import DesktopIdeaCard from '../DesktopIdeaCard';
import MobileIdeaCard from '../MobileIdeaCard';

const IdeaCard = (idea: TIdea_Preview): JSX.Element => (
	<React.Fragment>
		<FlexLayout>
			<StackLayout
				pr={{ base: 1, sm: 2 }}
				rounded={'none'}
				justifyContent={'space-between'}
				alignItems={'center'}
				spacing={0}
			>
				<BaseButton
					name={'upvote-idea-button'}
					variant={'ghost'}
					d={'flex'}
					css={{ width: '0.8em !important' }}
					color={'gray.500'}
					_hover={{ bg: 'green.50' }}
					pt={0}
				>
					<Icon as={IoArrowUpSharp} fontSize={'md'} pt={0} />
				</BaseButton>
				<Label
					fontSize={{ base: 'sm', sm: 'md' }}
					fontWeight={'medium'}
					label={'1'}
					color={'gray.500'}
				/>
				<BaseButton
					name={'downvote-idea-button'}
					variant={'ghost'}
					d={'flex'}
					css={{ width: '0.8em !important' }}
					color={'gray.500'}
					_hover={{ bg: 'red.50' }}
					p={0}
				>
					<Icon as={IoArrowDownSharp} fontSize={'md'} />
				</BaseButton>
			</StackLayout>
			<DesktopIdeaCard {...idea} />
			<MobileIdeaCard {...idea} />
		</FlexLayout>
	</React.Fragment>
);

export default IdeaCard;
