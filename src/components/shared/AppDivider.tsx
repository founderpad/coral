import { Divider } from '@chakra-ui/layout';
import { DividerProps } from '@chakra-ui/react';
import React from 'react';

export const AppDivider = (props?: DividerProps) => (
	<Divider {...props} borderColor="fpGrey.100" />
);

export default AppDivider;
