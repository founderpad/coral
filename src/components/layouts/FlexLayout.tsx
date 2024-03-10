import { Flex, FlexProps } from '@chakra-ui/layout';

const FlexLayout = ({
	rounded = 'md',
	...rest
}: FlexProps & { href?: string }) => <Flex {...rest} rounded={rounded} />;

export default FlexLayout;
