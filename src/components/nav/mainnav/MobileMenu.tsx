import { useMobileNav } from '@/hooks/util';
import { Icon } from '@chakra-ui/react';
import { IoCloseOutline, IoMenuSharp } from 'react-icons/io5';

export const MobileMenu = () => {
	const { isOpen, onToggle } = useMobileNav();

	return (
		<Icon
			display={{ base: 'inline-flex', md: 'none' }}
			as={isOpen ? IoCloseOutline : IoMenuSharp}
			mr={4}
			fontSize="2xl"
			onClick={onToggle}
			color="gray.900"
		/>
	);
};
