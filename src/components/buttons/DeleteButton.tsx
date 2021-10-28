import { Icon, IconButton, MenuButton } from '@chakra-ui/react';
import { IoTrashSharp } from 'react-icons/io5';
import { BaseButton } from '.';
import { BaseButtonProps } from './types/buttons';

const DeleteButton = (props: BaseButtonProps): JSX.Element => {
	const { variant, children } = props;

	return (
		<BaseButton
			{...props}
			colorScheme={'red'}
			variant={variant ?? 'solid'}
			borderWidth={0}
		>
			{children}
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

export { DeleteButton, DeleteMenuButton, DeleteIconButton };
