// import { ModalContentProps } from '@chakra-ui/react';
import { BoxProps, ModalContentProps } from '@chakra-ui/react';
import { createContext } from 'react';

interface ModalDrawerProps {
	isOpen: boolean;
	title?: string;
	body: React.ReactNode;
	noBtnLabel?: string;
	removePadding?: boolean;
	width?: ModalContentProps['width'];
	size?: string | undefined;
	action?: React.ReactNode | undefined;
	showFooter?: boolean;
	showHeader?: boolean;
	showCancel?: boolean;
	contentHeight?: BoxProps['height'];
}

const ModalDrawerContext = createContext({
	modalDrawer: {} as ModalDrawerProps,
	openModalDrawer: (_props: Omit<ModalDrawerProps, 'isOpen'>) => {},
	updateModalDrawer: (_props: Partial<ModalDrawerProps>) => {},
	closeModalDrawer: () => {}
});

export default ModalDrawerContext;
