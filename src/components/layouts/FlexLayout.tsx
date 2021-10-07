import { Flex, FlexProps } from '@chakra-ui/layout';

export const FlexLayout = (
	props: FlexProps & { href?: string }
): JSX.Element => <Flex {...props} flex={1} rounded={'md'} />;
