import { Tag, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const NewIdeaBadge = (): JSX.Element => {
	const badgeSize = useBreakpointValue({ base: 'sm', sm: 'md' });

	return (
		<React.Fragment>
			<Tag
				bgColor={'green.300'}
				variant={'subtle'}
				mr={2}
				color={'white'}
				fontWeight={'medium'}
				fontSize={{ base: 'xx-small', sm: 'xs' }}
				size={badgeSize}
				title={'A new idea posted in the last 7 days'}
				minW={'auto'}
				px={1}
			>
				New
			</Tag>
			{/* <Box
				height={2}
				width={2}
				bgColor={'green.300'}
				rounded={'md'}
				display={{ base: 'block', sm: 'none' }}
				mr={2}
			></Box> */}
		</React.Fragment>
	);
};

export default NewIdeaBadge;
