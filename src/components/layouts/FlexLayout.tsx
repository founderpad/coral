import { Flex, FlexProps } from '@chakra-ui/layout';

export const FlexLayout = ({
	rounded = 'md',
	...rest
}: FlexProps & { href?: string }) => <Flex {...rest} rounded={rounded} />;
