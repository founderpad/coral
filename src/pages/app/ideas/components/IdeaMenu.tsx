import { BaseMenu } from 'components/menu';
import React from 'react';
import { IoFlagSharp, IoShareSocial } from 'react-icons/io5';

// enum ACTION_TYPE {
// 	SHARE,
// 	REPORT
// }

export const IdeaMenu = ({ ideaId }: { ideaId: string }): JSX.Element => {
	return (
		<BaseMenu
			boxProps={{ mt: 2 }}
			options={[
				{
					title: 'Share',
					subTitle: 'Share this idea',
					onClick: (_e) => console.log('', ideaId),
					divider: true,
					icon: IoShareSocial
				},
				{
					title: 'Report',
					subTitle: 'Report this idea',
					onClick: (_e) => console.log(''),
					icon: IoFlagSharp
					// color: 'red.500'
				}
			]}
		/>
	);
};

export default IdeaMenu;
