import { BoxProps } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import { BoxLayout, FlexLayout } from '@components/layouts';
import Image from 'next/image';

const FounderpadLogo = (props: BoxProps): JSX.Element => (
	<BoxLayout position={'relative'} w={'180px'} {...props}>
		<Image
			src="/founderpad-logo.svg"
			alt="logo"
			layout={'fill'}
			objectFit={'contain'}
			priority
		/>
	</BoxLayout>
);

const FounderpadLogoWithBadge = ({ w }: { w: number }): JSX.Element => (
	<FlexLayout mx={'auto'} alignItems={'center'}>
		<FounderpadLogo w={w} />
		<Tag
			bg={'fpPrimary.700'}
			color={'white'}
			textTransform={'capitalize'}
			fontWeight={'medium'}
			textAlign={'center'}
			verticalAlign={'center'}
			fontSize={'x-small'}
			rounded={'md'}
			ml={2}
		>
			Beta
		</Tag>
	</FlexLayout>
);

export default FounderpadLogo;
export { FounderpadLogoWithBadge };
