import { ButtonGroup, Icon } from '@chakra-ui/react';
import { PrimaryButton } from '@components/buttons';
import { FlexLayout } from '@components/layouts';
import IdeaCycleContext from '@context/IdeaCycleContext';
import { useQueryParam } from '@hooks/util';
import Router from 'next/router';
import React, { useContext } from 'react';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

const IdeaCycler = () => {
	const { cachedIdeaIds } = useContext(IdeaCycleContext);
	const ideaId = useQueryParam('id');

	const onNextIdea = () => {
		for (const [i, v] of cachedIdeaIds.entries()) {
			if (i === cachedIdeaIds.length - 1) break;

			if (v === ideaId) {
				Router.push(
					{
						query: { id: cachedIdeaIds[i + 1] }
					},
					undefined,
					{ shallow: true }
				);
			}
		}
	};

	const onPreviousIdea = () => {
		for (const [i, v] of cachedIdeaIds.entries()) {
			if (v === ideaId) {
				Router.push(
					{ query: { id: cachedIdeaIds[i - 1] } },
					undefined,
					{ shallow: true }
				);
			}
		}
	};

	if (cachedIdeaIds.length > 1) {
		return (
			<FlexLayout
				borderBottomWidth={1}
				py={1}
				px={4}
				rounded={'none'}
				justifyContent={'flex-end'}
			>
				<ButtonGroup>
					<PrimaryButton
						name={'Previous'}
						variant={'ghost'}
						onClick={onPreviousIdea}
						hidden={ideaId === cachedIdeaIds?.[0]}
					>
						<Icon as={IoChevronBackSharp} />
					</PrimaryButton>
					<PrimaryButton
						name={'Next'}
						variant={'ghost'}
						onClick={onNextIdea}
						hidden={
							ideaId === cachedIdeaIds[cachedIdeaIds.length - 1]
						}
					>
						<Icon as={IoChevronForwardSharp} />
					</PrimaryButton>
				</ButtonGroup>
			</FlexLayout>
		);
	}

	return null;
};

export default IdeaCycler;
