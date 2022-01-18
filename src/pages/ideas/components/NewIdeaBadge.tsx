import { Tag, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const NewIdeaBadge = () => {
	const badgeSize = useBreakpointValue({ base: 'sm', sm: 'md' });

	return (
		<React.Fragment>
			<Tag
				bgColor={'green.300'}
				variant={'subtle'}
				mr={2}
				color={'white'}
				fontWeight={'medium'}
				fontSize={{ base: 'xx-small', sm: 'x-small' }}
				size={badgeSize}
				title={'A new idea posted in the last 7 days'}
				minW={'auto'}
				px={1}
				rounded={'sm'}
			>
				New
			</Tag>
		</React.Fragment>
	);
};

export default NewIdeaBadge;
