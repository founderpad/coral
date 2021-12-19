import { BaseButton } from '.';
import { BaseButtonProps } from './types/buttons';

export const PrimaryButton = (props: BaseButtonProps): JSX.Element => {
	const { variant, children, size } = props;

	return (
		<BaseButton
			{...props}
			colorScheme={'fpPrimary'}
			borderColor={'initial'}
			variant={variant ?? 'solid'}
			size={size ?? 'sm'}
			minW={'40px'}
			rounded={'md'}
		>
			{children}
		</BaseButton>
	);
};
