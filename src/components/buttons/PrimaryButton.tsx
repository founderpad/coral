import { BaseButton } from '.';
import { BaseButtonProps, LinkButtonProps } from './types/buttons';

export const PrimaryButton = (props: BaseButtonProps | LinkButtonProps) => {
	const { children, size = 'sm', variant = 'solid' } = props;

	return (
		<BaseButton
			{...props}
			colorScheme="fpPrimary"
			borderColor="initial"
			variant={variant}
			size={size}
			minW="40px"
			rounded="md"
		>
			{children}
		</BaseButton>
	);
};
