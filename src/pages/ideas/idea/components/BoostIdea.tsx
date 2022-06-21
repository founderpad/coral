import { Button, Icon } from '@chakra-ui/react';
import { AlertFeedback } from '@/components/alert';
import { PrimaryButton } from '@/components/buttons';
import BaseHeading from '@/components/heading/BaseHeading';
import { Label } from '@/components/labels';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { AppDivider } from '@/components/shared';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import { useCurrentUser } from '@/hooks/auth';
import { useModalDrawer } from '@/hooks/util';
import { PayPalButtons } from '@paypal/react-paypal-js';
import React, { useCallback } from 'react';
import { BiCoinStack, BiPound } from 'react-icons/bi';
import { IoCheckmarkCircleSharp, IoRocketSharp } from 'react-icons/io5';

const PaymentSuccessful = () => (
	<StackLayout alignItems="center">
		<AlertFeedback status="success" message="Payment successful" px={2} />
		<Icon
			as={IoCheckmarkCircleSharp}
			fontSize="100px"
			mx="auto"
			color="green.500"
			pb={4}
		/>
		<BaseHeading>Your idea is now in boost</BaseHeading>
	</StackLayout>
);

const BoostIdea = (idea: TIdeaPreviewFieldsFragment) => {
	const { openModalDrawer } = useModalDrawer();

	const onClick = useCallback(() => {
		openModalDrawer({
			title: 'Boost idea',
			body: <BoostIdeaForm {...idea} />
		});
	}, [openModalDrawer, idea]);

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
	const { updateModalDrawer } = useModalDrawer();
	const esteemPoints = useCurrentUser().esteemPoints?.points ?? 0;
	const neededPoints = esteemPoints >= 1000 ? 0 : 1000 - esteemPoints;

	// const [succeeded, setSucceeded] = useState(false);
	// const [paypalErrorMessage, setPaypalErrorMessage] = useState('');
	// const [orderID, setOrderID] = useState(false);
	// const [billingDetails, setBillingDetails] = useState('');

	// const FEES = 4.89 / 10;
	// const TOTAL = FEES + 10 + 0.3 + 0.5;

	// Creates a paypal order
	const createOrder = (_data: any, actions: any) => {
		return actions.order
			.create({
				purchase_units: [
					{
						description: 'Boost idea',
						amount: {
							value: 11.5
						}
					}
				],
				// Remove the application_context object if you need your users to add a shipping address
				application_context: {
					shipping_preference: 'NO_SHIPPING'
				}
			})
			.then((orderID: any) => {
				// setOrderID(orderID);
				return orderID;
			});
	};

	const onApprove = (_data: any, actions: any) => {
		return actions.order.capture().then(function (_details: any) {
			// const { payer } = details;
			// setBillingDetails(payer);
			// setSucceeded(true);
			updateModalDrawer({
				body: <PaymentSuccessful />,
				showHeader: false
			});
		});
		// .catch((err) => setPaypalErrorMessage('Something went wrong.'));
	};

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
								fontSize="xl"
								size="md"
							/>
							<Label
								fontSize="md"
								textAlign="center"
								color="yellow.500"
							>
								1000
							</Label>
						</FlexLayout>
						{neededPoints > 0 && (
							<Label fontSize="xs" color="gray.500">
								You have {esteemPoints} esteem points.
								<br /> Earn another{' '}
								<strong>{neededPoints}</strong> to be able to
								boost (500 for boost, and 500 to distribute to
								users on feedback).
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
								as={BiPound}
								color="green.600"
								fontSize="xl"
								size="md"
							/>
							<Label
								fontSize="md"
								textAlign="center"
								color="green.600"
							>
								10
							</Label>
						</FlexLayout>
						<Label fontSize="xs" color="gray.500">
							Total (incl. fees): £11.50
						</Label>
					</StackLayout>
					<PayPalButtons
						style={{
							color: 'silver',
							shape: 'pill',
							label: 'pay',
							tagline: false
						}}
						createOrder={createOrder}
						// // fundingSource={FUNDING.PAYPAL}
						// // createOrder={createPayPalOrder}
						onApprove={onApprove}
					/>
				</FlexLayout>
			</StackLayout>
		</StackLayout>
	);
};

export default BoostIdea;
