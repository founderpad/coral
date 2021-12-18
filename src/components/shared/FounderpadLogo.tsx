import { BoxProps } from '@chakra-ui/layout';
import { BoxLayout } from 'components/layouts';
import Image from 'next/image';

const FounderpadLogo = (props: BoxProps): JSX.Element => (
	<BoxLayout position={'relative'} w={'100px'} {...props}>
		<Image
			src="/founderpad-logo.svg"
			alt="logo"
			layout={'fill'}
			objectFit={'contain'}
		/>
	</BoxLayout>
);

export default FounderpadLogo;
