import { Icon, IconButton, MenuButton } from '@chakra-ui/react';
import { IoTrashSharp } from '@/components/icons';
import { BaseButton } from '.';
import { BaseButtonProps } from './types/buttons';

const DeleteButton = (props: BaseButtonProps) => {
	const { variant = 'solid', children } = props;

	return (
		<BaseButton
			{...props}
			colorScheme="red"
			variant={variant}
			fontSize="small"
		>
			{children}
		</BaseButton>
	);
};

const DeleteMenuButton = (props: BaseButtonProps) => {
	return (
		<MenuButton {...props} colorScheme="red">
			Delete
		</MenuButton>
	);
};

const DeleteIconButton = ({ onClick }: { onClick: () => void }) => (
	<IconButton
		onClick={onClick}
		aria-label="Delete"
		variant="ghost"
		colorScheme="gray"
		fontSize="md"
		size="md"
		icon={<Icon as={IoTrashSharp} fontSize="large" color="red.500" />}
		rounded="full"
	/>
);

export { DeleteButton, DeleteMenuButton, DeleteIconButton };
