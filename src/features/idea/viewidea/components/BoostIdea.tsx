import { Button, Icon } from '@chakra-ui/react';
import { TIdeaPreviewFieldsFragment } from '@/generated/api';
import { useModalDrawer } from '@/hooks/util';
import React, { useCallback } from 'react';
import { IoRocketSharp } from 'react-icons/io5';
import PayPalBoostIdeaForm from './PayPalBoostForm';

const BoostIdea = (idea: Partial<TIdeaPreviewFieldsFragment>) => {
	const { openModalDrawer } = useModalDrawer();

	const onClick = useCallback(() => {
		openModalDrawer({
			title: 'Boost idea',
			body: <PayPalBoostIdeaForm {...idea} />,
			contentHeight: '99.1%'
		});
	}, [openModalDrawer, idea]);

	return (
		<Button
			colorScheme="purple"
			leftIcon={<Icon as={IoRocketSharp} />}
			fontSize="xs"
			size="xs"
			ml="auto"
			onClick={onClick}
		>
			Boost
		</Button>
	);
};

export default BoostIdea;
