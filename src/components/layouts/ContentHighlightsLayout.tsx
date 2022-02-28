import { GridItem, SimpleGrid } from '@chakra-ui/layout';
import ContentFieldAndValue from '@components/shared/ContentFieldAndValue';
import HighlightTag from '@pages/ideas/idea/components/IdeaHighlightTag';
import React from 'react';
import { IconType } from 'react-icons';
import { FlexLayout } from './FlexLayout';
import { StackLayout } from './StackLayout';

interface IContentProps {
	title: string;
	value: string | number;
	icon?: IconType;
}

interface Props {
	content: IContentProps[];
	highlights: IContentProps[];
}

const ContentHighlightsLayout = (props: Props) => {
	const { content, highlights } = props;

	return (
		<SimpleGrid columns={{ base: 1, md: 12 }} gap={4} py={4}>
			<GridItem
				colSpan={{ md: 8, lg: 9 }}
				gridRowGap={4}
				order={{ base: 2, md: 1 }}
			>
				<StackLayout spacing={8}>
					{content.map((c, key) => (
						<ContentFieldAndValue key={key} {...c} />
					))}
				</StackLayout>
			</GridItem>
			<GridItem
				colSpan={{ md: 4, lg: 3 }}
				order={{ base: 1, md: 2 }}
				borderLeftWidth={{ base: 'none', md: '1px' }}
				borderLeftColor="gray.100"
			>
				{/* <StackLayout
					display={{ base: 'none', md: 'flex' }}
					flex={1}
					pl={4}
				>
					{highlights.map((h, key) => (
						<KeyInformationBox key={key} {...h} />
					))}
				</StackLayout> */}

				<FlexLayout
					direction="row"
					display={{ base: 'flex', md: 'none' }}
					flexWrap="wrap"
					alignItems="center"
				>
					{highlights.map((h, key) => (
						<HighlightTag key={key} {...h} />
					))}
				</FlexLayout>
			</GridItem>
		</SimpleGrid>
	);
};

export default ContentHighlightsLayout;
