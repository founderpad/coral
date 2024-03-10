import { AlertFeedback } from '@/components/alert';
import { PrimaryButton } from '@/components/buttons';
import BaseHeading from '@/components/heading/BaseHeading';
import { Label } from '@/components/labels';
import { StackLayout, FlexLayout } from '@/components/layouts';
import { AppDivider } from '@/components/shared';
import { TIdeaPreviewFieldsFragment } from '@/generated/api';
import { useCurrentUser } from '@/hooks/auth';
import { useModalDrawer } from '@/hooks/util';
import { Icon } from '@chakra-ui/react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react';
import { BiCoinStack, BiPound } from 'react-icons/bi';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

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

const PayPalBoostIdeaForm = (idea: Partial<TIdeaPreviewFieldsFragment>) => {
	const { updateModalDrawer } = useModalDrawer();
	const esteemPoints = useCurrentUser().esteemPointsCurrency?.points ?? 0;
	const neededPoints = esteemPoints >= 1000 ? 0 : 1000 - esteemPoints;

	// Creates a paypal order
	const createOrder = (_data: any, actions: any) => {
		return actions.order
			.create({
				purchase_units: [
					{
						description: `Boost idea with id: ${idea.id}`,
						amount: {
							value: 0.25
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
			updateModalDrawer({
				body: <PaymentSuccessful />,
				showHeader: false
			});
		});
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

				<StackLayout>
					<FlexLayout>
						<Icon
							as={BiPound}
							color="green.600"
							fontSize="xl"
							size="md"
						/>
						<>
							<Label
								fontSize="md"
								textAlign="center"
								color="green.600"
							>
								10
							</Label>
							<Label
								fontSize="xs"
								color="gray.500"
								alignSelf="center"
								ml={4}
							>
								(Total incl. fees: £11.50)
							</Label>
						</>
					</FlexLayout>

					<PayPalButtons
						style={{
							color: 'silver',
							shape: 'pill',
							label: 'pay',
							tagline: false
						}}
						className="paypal-component"
						createOrder={createOrder}
						onApprove={onApprove}
					/>
				</StackLayout>
			</StackLayout>
		</StackLayout>
	);
};

export default PayPalBoostIdeaForm;
