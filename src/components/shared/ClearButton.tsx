import { Button } from '@chakra-ui/react';

interface Props {
	onClick: () => void;
	label?: string;
}

const ClearButton = (props: Props) => {
	const { onClick, label = 'Clear' } = props;
	return (
		<Button
			id="clear-field"
			name="clear-field"
			fontSize="x-small"
			colorScheme="fpPrimary"
			variant="link"
			mb={1}
			textAlign="left"
			ml="auto"
			onClick={onClick}
		>
			{label}
		</Button>
	);
};

export default ClearButton;
