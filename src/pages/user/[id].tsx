import PageLayout from 'components/layouts/PageLayout';
import WindowTitle from 'components/shared/WindowTitle';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';

const User = (): JSX.Element => {
    return (
        <React.Fragment>
            <WindowTitle title="View user" />
            <PageLayout
                title="View user"
            >
                User
			</PageLayout>
        </React.Fragment>
    );
}

export default AuthFilter(User);