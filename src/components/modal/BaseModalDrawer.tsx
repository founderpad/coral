import Drawer from '@/components/drawer';
import { useMobile, useModalDrawer } from '@/hooks/util';
import React, { useCallback } from 'react';
import Modal from '.';

/**
 * The @BaseModalDrawer component responsively determines whether to display a drawer or a modal.
 *
 * @param param0
 * @returns
 *
 * @author jlee
 */
const BaseModalDrawer = () => {
	const isMobile = useMobile();
	const { modalDrawer, closeModalDrawer } = useModalDrawer();

	const closeDialog = useCallback(() => {
		closeModalDrawer();
	}, [closeModalDrawer]);

	const onCloseClick = () => closeDialog();

	if (isMobile) return <Drawer {...modalDrawer} onClose={onCloseClick} />;
	return <Modal {...modalDrawer} onClose={onCloseClick} />;
};

export default BaseModalDrawer;
