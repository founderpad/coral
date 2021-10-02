import { FormControl, FormLabel, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';
import { TIdea } from 'types/idea';

export const ViewIdeaForm = ({ idea }: { idea: TIdea }): JSX.Element => {
	return (
		<Stack spacing={6}>
			<FormControl>
				<FormLabel>Name</FormLabel>
				<Text>{idea.name}</Text>
			</FormControl>

			<FormControl>
				<FormLabel>Mission statement</FormLabel>
				<Text>{idea.mission_statement}</Text>
			</FormControl>

			<FormControl>
				<FormLabel>Description</FormLabel>
				<Text>{idea.description}</Text>
			</FormControl>

			<FormControl>
				<FormLabel>Industry</FormLabel>
				<Text>{idea.industry}</Text>
			</FormControl>

			<FormControl>
				<FormLabel>Competitors</FormLabel>
				<Text>{idea.competitors ?? 'Empty'}</Text>
			</FormControl>

			<FormControl>
				<FormLabel>Team</FormLabel>
				<Text>{idea.team ?? 'Empty'}</Text>
			</FormControl>

			<FormControl>
				<FormLabel>Additional information</FormLabel>
				<Text>{idea.additional_information ?? 'Empty'}</Text>
			</FormControl>

			<FormControl flexDirection={'row'}>
				<FormLabel>Is published?</FormLabel>
				{idea.is_published ? (
					<Icon
						as={IoCheckmarkCircle}
						color={'green.500'}
						fontSize={'4xl'}
					/>
				) : (
					<Icon
						as={IoCloseCircle}
						color={'red.500'}
						fontSize={'4xl'}
					/>
				)}
			</FormControl>
		</Stack>
	);
};

export default ViewIdeaForm;
