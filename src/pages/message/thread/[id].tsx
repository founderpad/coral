import { PageLayout } from '@components/layouts';
import AuthFilter from '@utils/AuthFilter';
import React from 'react';

const MessageThread = () => {
	return <PageLayout title="Your chat with Jamie">Test</PageLayout>;
};

export default AuthFilter(MessageThread);
