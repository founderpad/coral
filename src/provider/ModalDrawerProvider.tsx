import { ModalContentProps } from '@chakra-ui/react';
import ModalDrawerContext from '@/context/ModalDrawerContext';
import React, { useState } from 'react';

interface ModalDrawerProps {
	isOpen: boolean;
	title?: string;
	body: React.ReactNode | undefined;
	noBtnLabel?: string;
	removePadding?: boolean;
	width?: ModalContentProps['width'];
	size?: string | undefined;
	action?: React.ReactNode | undefined;
	showFooter?: boolean;
	showHeader?: boolean;
}

const ModalDrawerProvider = ({
	children,
	...props
}: {
	children: React.ReactNode;
}): any => {
	const [modalDrawer, setModalDrawer] = useState<ModalDrawerProps>({
		isOpen: false,
		body: ''
	});

	const openModalDrawer = (
		openModalDrawerProps: Omit<ModalDrawerProps, 'isOpen'>
	) => {
		setModalDrawer({
			...openModalDrawerProps,
			isOpen: true
		});
	};

	const updateModalDrawer = (
		updateModalDrawerProps: Partial<ModalDrawerProps>
	) => {
		const updatedProps = { ...modalDrawer, ...updateModalDrawerProps };
		setModalDrawer({
			...updatedProps
		});
	};

	const closeModalDrawer = () => {
		setModalDrawer({
			body: undefined,
			isOpen: false
		});
	};

	return (
		<ModalDrawerContext.Provider
			{...props}
			value={{
				modalDrawer,
				openModalDrawer,
				closeModalDrawer,
				updateModalDrawer
			}}
		>
			{children}
		</ModalDrawerContext.Provider>
	);
};

export default ModalDrawerProvider;
