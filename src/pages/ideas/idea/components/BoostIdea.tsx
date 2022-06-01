import { Button, Icon } from '@chakra-ui/react';
import { PrimaryButton } from '@components/buttons';
import BaseHeading from '@components/heading/BaseHeading';
import { Label } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
import { AppDivider } from '@components/shared';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useModalDrawer } from '@hooks/util';
import { PayPalButtons } from '@paypal/react-paypal-js';
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
	}, [setModalDrawer, idea]);

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
	// const { setModalDrawer } = useModalDrawer();
	const esteemPoints = useCurrentUser().esteemPoints?.points ?? 0;
	const neededPoints = esteemPoints >= 1000 ? 0 : 1000 - esteemPoints;

	// const [succeeded, setSucceeded] = useState(false);
	// const [paypalErrorMessage, setPaypalErrorMessage] = useState('');
	// const [orderID, setOrderID] = useState(false);
	// const [billingDetails, setBillingDetails] = useState('');

	// const AMOUNT = 10;

	// creates a paypal order
	// const createOrder = (data, actions) => {
	// 	return actions.order
	// 		.create({
	// 			purchase_units: [
	// 				{
	// 					description: 'Boost idea',
	// 					amount: {
	// 						// charge users $499 per order
	// 						value: AMOUNT
	// 					}
	// 				}
	// 			],
	// 			// remove the applicaiton_context object if you need your users to add a shipping address
	// 			application_context: {
	// 				shipping_preference: 'NO_SHIPPING'
	// 			}
	// 		})
	// 		.then((orderID) => {
	// 			setOrderID(orderID);
	// 			return orderID;
	// 		});
	// };

	// const onApprove = (data, actions) => {
	// 	return actions.order
	// 		.capture()
	// 		.then(function (details) {
	// 			const { payer } = details;
	// 			setBillingDetails(payer);
	// 			setSucceeded(true);
	// 		})
	// 		.catch((err) => setPaypalErrorMessage('Something went wrong.'));
	// };

	// if (succeeded) {
	// 	return (
	// 		<StackLayout spacing={12}>
	// 			<BaseHeading>Payment complete</BaseHeading>
	// 		</StackLayout>
	// 	);
	// }

	return (
		<StackLayout spacing={12}>
			<StackLayout spacing={2}>
				<Label fontSize="sm" color="gray.500" textAlign="center">
					Idea
				</Label>
				<BaseHeading fontSize="md" textAlign="center">
					{idea.name}
				</BaseHeading>
			</StackLayout>

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
								1000
							</Label>
						</FlexLayout>
						{neededPoints > 0 && (
							<Label fontSize="xs" color="gray.500">
								You have {esteemPoints} esteem points.
								<br /> Earn another{' '}
								<strong>{neededPoints}</strong> to be able to
								boost (500 for boost, and 500 to users on ).
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
							Total (incl. fees): ${10 + 0.3 + 0.29}
						</Label>
					</StackLayout>
					<PayPalButtons
						style={{
							color: 'silver',
							shape: 'pill',
							label: 'pay',
							tagline: false
						}}
						// createOrder={createOrder}
						// // fundingSource={FUNDING.PAYPAL}
						// // createOrder={createPayPalOrder}
						// onApprove={onApprove}
					/>
				</FlexLayout>
			</StackLayout>
		</StackLayout>
	);
};

export default BoostIdea;
