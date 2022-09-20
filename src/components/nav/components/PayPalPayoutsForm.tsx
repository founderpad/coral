import { PrimaryButton } from '@/components/buttons';
import { Label } from '@/components/labels';
import { StackLayout } from '@/components/layouts';
import { useModalDrawer } from '@/hooks/util';
import { Checkbox } from '@chakra-ui/react';

import React, { useCallback, useState } from 'react';

const PayPalPayoutsForm = ({ amount }: { amount: number }) => {
	const [isChecked, setChecked] = useState(false);
	const { closeModalDrawer } = useModalDrawer();

	const onToggleChange = useCallback(() => {
		setChecked(!isChecked);
	}, [isChecked]);

	return (
		<StackLayout>
			<Label fontSize="xs">
				In order to withdraw your ${amount}, your PayPal account must be
				registered with the same email address as you used to register
				with founderpad.
				<br />
				<br />
				By clicking withdraw below, we will confirm your identity and
				send your earned funds to your PayPal account.
			</Label>
			<Checkbox
				name="confirm-paypal-email"
				colorScheme="fpPrimary"
				onChange={onToggleChange}
				isChecked={isChecked}
			>
				<Label
					color="fpGrey.900"
					fontSize={{
						base: 'small',
						sm: 'xs'
					}}
				>
					I confirm my PayPal email is the same as my founderpad
					email.
				</Label>
			</Checkbox>
			<PrimaryButton
				name="withdraw-funds"
				disabled={!isChecked}
				onClick={closeModalDrawer}
			>
				Withdraw ${amount}
			</PrimaryButton>
		</StackLayout>
	);
};

export default PayPalPayoutsForm;
