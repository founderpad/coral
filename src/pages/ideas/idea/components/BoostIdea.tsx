import { Button, Icon } from '@chakra-ui/react';
import { PrimaryButton } from '@components/buttons';
import BaseHeading from '@components/heading/BaseHeading';
import { Label } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
import { AppDivider } from '@components/shared';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useModalDrawer } from '@hooks/util';
import React, { useCallback } from 'react';
import { BiCoinStack, BiDollar } from 'react-icons/bi';
import { IoRocketSharp } from 'react-icons/io5';

const BoostIdea = (idea: TIdeaPreviewFieldsFragment) => {
	const { setModalDrawer } = useModalDrawer();
	const onClick = useCallback(() => {
		setModalDrawer({
			title: 'Boost idea',
			isOpen: true,
			hideYesLabel: true,
			body: <BoostIdeaForm {...idea} />
		});
	}, [setModalDrawer]);

	return (
		<Button
			colorScheme="purple"
			leftIcon={<Icon as={IoRocketSharp} />}
			fontSize="xs"
			size="xs"
			ml="auto"
			onClick={onClick}
		>
			Boost
		</Button>
	);
};

const BoostIdeaForm = (idea: TIdeaPreviewFieldsFragment) => {
	const esteemPoints = useCurrentUser().esteemPoints?.points ?? 0;
	const neededPoints = esteemPoints >= 500 ? 0 : 500 - esteemPoints;
	return (
		<>
			<BaseHeading fontSize="md" pb={6}>
				{idea.name}
			</BaseHeading>
			<Label fontSize="sm" pb={8}>
				Boost your idea below to receive more feedback and engagement on
				your idea. Users will earn a portion of the esteem points or
				money you spend on the boost to ensure you receive the highest
				quality feedback possible.
			</Label>

			<Label
				textAlign="center"
				fontSize="sm"
				fontWeight="semibold"
				pb={12}
			>
				Boost using the following options
			</Label>
			<StackLayout>
				<FlexLayout flex={1}>
					<StackLayout
						justifyContent="center"
						flexDirection="column"
						spacing={2}
						flex={1}
					>
						<FlexLayout>
							<Icon
								as={BiCoinStack}
								color="yellow.500"
								fontSize="2xl"
								size="md"
							/>
							<Label
								fontSize="md"
								textAlign="center"
								color="yellow.500"
								mr={4}
							>
								{esteemPoints}
							</Label>
						</FlexLayout>
						{neededPoints > 0 && (
							<Label fontSize="xs" color="gray.500">
								Earn another <strong>{neededPoints}</strong>{' '}
								esteem points to be able to boost
							</Label>
						)}
					</StackLayout>
					<PrimaryButton name="boost" isDisabled={neededPoints > 0}>
						Boost
					</PrimaryButton>
				</FlexLayout>
				<AppDivider />
				<FlexLayout flex={1}>
					<StackLayout
						justifyContent="center"
						flexDirection="column"
						spacing={2}
						flex={1}
					>
						<FlexLayout>
							<Icon
								as={BiDollar}
								fontSize="2xl"
								size="md"
								color="green.600"
							/>
							<Label
								fontSize="md"
								textAlign="center"
								color="green.600"
								mr={4}
							>
								10
							</Label>
						</FlexLayout>
						<Label fontSize="xs" color="gray.500">
							Payment is made using Stripe
						</Label>
					</StackLayout>
					<PrimaryButton name="boost">Boost for $10</PrimaryButton>
				</FlexLayout>
			</StackLayout>
		</>
	);
};

export default BoostIdea;
