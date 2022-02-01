import { Box, Icon, Heading } from '@chakra-ui/react';
import { DocumentTitle } from '@components/shared';
import { useIdeaQuery } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import AuthFilter from '@utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import { IoChatboxEllipsesSharp } from 'react-icons/io5';

const ViewIdea: NextPage = () => {
	const user = useCurrentUser();
	// const [data, setData] = useState<TIdeaQuery>({});

	useIdeaQuery({
		variables: {
			id: useQueryParam('id'),
			userId: user?.id
		}
	});

	return (
		<React.Fragment>
			<DocumentTitle title="Messages" />
			{/* <IdeaContext.Provider value={{ data, setData }}> */}
			{/* <ViewIdeaTabLayout /> */}
			{/* </IdeaContext.Provider> */}
			<Box
				d={'flex'}
				flex={1}
				justifyContent={'center'}
				alignItems={'center'}
				flexDirection={'column'}
			>
				<Icon
					as={IoChatboxEllipsesSharp}
					fontSize={'xx-large'}
					color={'gray.500'}
					mb={4}
				/>
				<Heading color={'gray.500'} fontSize={'lg'}>
					Messages coming soon
				</Heading>
			</Box>
		</React.Fragment>
	);
};

export default AuthFilter(ViewIdea);
