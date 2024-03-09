import { StackLayout } from '@/components/layouts';
import BaseTag from '@/components/tags/BaseTag';
import { TagLeftIcon } from '@chakra-ui/react';
import { AiTwotoneThunderbolt } from 'react-icons/ai';

interface CommentLayoutProps {
	children: JSX.Element[];
	isBoost?: boolean;
}

// TODO
// Add into layout/ directory

/**
 *
 * @param props @see CommentLayoutProps
 * @returns @see JSX.Element
 */
const CommentLayout = (props: CommentLayoutProps) => {
	const { isBoost = false, children } = props;

	return (
		<StackLayout
			p={2}
			bg="fpLightGrey.300"
			spacing={0}
			style={{
				borderRadius: '0 10px 10px'
			}}
			borderWidth={3}
			borderColor={isBoost ? 'purple.500' : 'transparent'}
			position="relative"
		>
			{isBoost && (
				<BaseTag
					position="absolute"
					top={0}
					right={0}
					borderTopLeftRadius="none"
					borderBottomRightRadius="none"
					bg="purple.500"
					borderWidth={0}
					color="white"
				>
					<TagLeftIcon as={AiTwotoneThunderbolt} mr={1} />
					Boosted
				</BaseTag>
			)}
			{children}
		</StackLayout>
	);
};

export default CommentLayout;
