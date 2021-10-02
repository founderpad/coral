import { IconButton, IconButtonProps } from '@chakra-ui/react';
import React from 'react';
import { IoPencilSharp } from 'react-icons/io5';

type Props = IconButtonProps & { htmlFor?: string };

const EditButton = (props: Props): JSX.Element => (
	<IconButton
		{...props}
		aria-label={'Edit'}
		variant={'ghost'}
		colorScheme={'fpPrimary'}
		fontSize={'large'}
		icon={<IoPencilSharp />}
		rounded={'full'}
	/>
);

export default EditButton;
