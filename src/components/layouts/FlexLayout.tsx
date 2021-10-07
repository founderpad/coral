import { Flex, FlexProps } from '@chakra-ui/layout';

export const FlexLayout = (
	props: FlexProps & { href?: string }
): JSX.Element => <Flex {...props} rounded={'md'} />;
