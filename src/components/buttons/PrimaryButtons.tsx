import { BaseButtonProps } from 'types/buttons';
import { BaseButton } from '.';

const PrimaryButton = (props: BaseButtonProps): JSX.Element => {
	const { variant, label, size } = props;

	return (
		<BaseButton
			{...props}
			colorScheme={'fpPrimary'}
			variant={variant ?? 'solid'}
			size={size ?? 'sm'}
			minW={'50px'}
			rounded={'md'}
		>
			{label}
		</BaseButton>
	);
};

const PrimaryOutlinedButton = (props: BaseButtonProps): JSX.Element => (
	<PrimaryButton {...props} variant={'outline'} />
);

const PrimaryGhostButton = (props: BaseButtonProps): JSX.Element => (
	<PrimaryButton {...props} variant={'ghost'} />
);

export { PrimaryButton, PrimaryOutlinedButton, PrimaryGhostButton };
