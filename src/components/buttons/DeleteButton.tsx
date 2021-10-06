import { Icon, IconButton, MenuButton } from '@chakra-ui/react';
import { IoTrashSharp } from 'react-icons/io5';
import { BaseButton } from '.';
import { BaseButtonProps } from './types/buttons';

const DeleteButton = (props: BaseButtonProps): JSX.Element => {
	const { variant, label } = props;

	return (
		<BaseButton
			{...props}
			colorScheme={'red'}
			variant={variant ?? 'solid'}
			// size={size ?? 'sm'}
			borderWidth={1}
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

const DeleteIconButton = ({
	onClick
}: {
	onClick: () => void;
}): JSX.Element => (
	<IconButton
		onClick={onClick}
		aria-label={'Delete'}
		variant={'ghost'}
		colorScheme={'gray'}
		fontSize={'md'}
		size={'md'}
		icon={<Icon as={IoTrashSharp} fontSize={'large'} color={'red.500'} />}
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
