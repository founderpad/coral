import { BoxProps } from '@chakra-ui/layout';
// import { Tag } from '@chakra-ui/tag';
import { BoxLayout, FlexLayout } from '@/components/layouts';
import Image from 'next/image';
import { FlexProps } from '@chakra-ui/react';

const FounderpadLogo = (props: BoxProps) => (
	<BoxLayout position="relative" w="180px" {...props}>
		<Image
			src="/founderpad-logo.svg"
			alt="logo"
			layout="fill"
			objectFit="contain"
			priority={true}
		/>
	</BoxLayout>
);

const FounderpadLogoWithBadge = ({
	display,
	w
}: {
	display: FlexProps['display'];
	w: number;
}) => (
	<FlexLayout mx="auto" alignItems="center" display={display}>
		<FounderpadLogo w={w} />
		{/* <Tag
			textTransform="capitalize"
			fontWeight="medium"
			textAlign="center"
			verticalAlign="center"
			fontSize="sm"
			rounded="md"
			variant="solid"
			colorScheme="fpPrimary"
			ml={2}
		>
			0.1.0
		</Tag> */}
	</FlexLayout>
);

export default FounderpadLogo;
export { FounderpadLogoWithBadge };
