import { IconButton, MenuButton } from '@chakra-ui/react';
import { IoTrashSharp } from 'react-icons/io5';
import { BaseButtonProps } from 'types/buttons';
import { BaseButton } from '.';

const DeleteButton = (props: BaseButtonProps): JSX.Element => {
	const { variant, label } = props;

	return (
		<BaseButton
			{...props}
			colorScheme={'red'}
			variant={variant ?? 'solid'}
		// size={size ?? 'sm'}
		>
			{label}
		</BaseButton>
	);
};

const DeleteMenuButton = (props: BaseButtonProps): JSX.Element => {
	return (
		<MenuButton {...props} colorScheme={'red'}>
			Delete
		</MenuButton>
	);
};

const DeleteOutlinedButton = (props: BaseButtonProps): JSX.Element => (
	<DeleteButton {...props} variant={'outline'} />
);

const DeleteGhostButton = (props: BaseButtonProps): JSX.Element => (
	<DeleteButton {...props} variant={'ghost'} />
);

const DeleteIconButton = ({ onClick }: { onClick: () => void }): JSX.Element => (
	<IconButton
		onClick={onClick}
		aria-label={'Delete'}
		colorScheme={'red'}
		variant={'ghost'}
		fontSize={'large'}
		icon={<IoTrashSharp />}
		rounded={'full'}
	/>
);

export {
	DeleteButton,
	DeleteOutlinedButton,
	DeleteMenuButton,
	DeleteGhostButton,
	DeleteIconButton
};
