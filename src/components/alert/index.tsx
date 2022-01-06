import { Alert, AlertProps } from '@chakra-ui/alert';
import React from 'react';

// status: AlertProps['status'];

const AlertFeedback = (props: AlertProps): JSX.Element => <Alert {...props} />;

export default AlertFeedback;
