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
				py={2}
				// bg={'gray.50'}
				rounded={'none'}
				justifyContent={'space-between'}
				alignItems={'center'}
			>
				<BaseButton
					name={'upvote-idea-button'}
					variant={'ghost'}
					d={'flex'}
					css={{ width: '0.8em !important' }}
					py={1}
					color={'gray.500'}
					_hover={{ bg: 'green.50' }}
					p={0}
				>
					<Icon as={IoArrowUpSharp} fontSize={'md'} />
				</BaseButton>
				<Label
					fontSize={{ base: 'xs', sm: 'md' }}
					fontWeight={'normal'}
					label={'1'}
					color={'gray.500'}
				/>
				<BaseButton
					name={'upvote-idea-button'}
					variant={'ghost'}
					d={'flex'}
					size={'xs'}
					py={1}
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
