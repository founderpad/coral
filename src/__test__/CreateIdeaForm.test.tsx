import { MockedProvider } from '@apollo/client/testing';
import { fireEvent } from '@testing-library/dom';
import { TIdeas } from 'generated/graphql';
import { CREATE_IDEA } from 'graphql/ideas';
import CreateEditIdeaForm from 'pages/ideas/components/CreateEditIdeaForm';
import { render } from '__test__/testUtils';

describe('Create idea form', () => {
	const idea: Partial<TIdeas> = {
		name: 'Idea name',
		description: 'Some idea description',
		additional_information: 'Some additional information',
		business_plan: 'Some business plan',
		team: 'Some team',
		competitors: 'Some competitors',
		mission_statement: 'Some mission statement',
		field: 'Finance',
		is_published: true
	};

	const mocks = [
		{
			request: {
				query: CREATE_IDEA,
				variables: {
					idea
				}
			},
			result: {
				data: {
					idea: {
						id: '2',
						name: 'Idea name',
						description: 'Some idea description',
						additional_information: 'Some additional information',
						business_plan: 'Some business plan',
						team: 'Some team',
						competitors: 'Some competitors',
						mission_statement: 'Some mission statement',
						field: 'Finance',
						user_id: '1',
						is_published: true
					}
				}
			}
		}
	];

	it('matches snapshot', () => {
		const { asFragment } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<CreateEditIdeaForm />
			</MockedProvider>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('renders CreateEditIdea form', () => {
		const { getByText } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<CreateEditIdeaForm />
			</MockedProvider>
		);
		expect(getByText(/Publish your idea/i)).toBeInTheDocument();
	});

	it('should render CreateEditIdeaForm fields', () => {
		const { getByRole } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<CreateEditIdeaForm />
			</MockedProvider>
		);

		expect(getByRole('textbox', { name: /name/i })).toBeInTheDocument();
		expect(
			getByRole('textbox', { name: /description/i })
		).toBeInTheDocument();
		// expect(
		// 	getByRole('textbox', { name: /mission_statement/i })
		// ).toBeInTheDocument();
		// expect(getByRole('combobox', { name: /field/i })).toBeInTheDocument();
		expect(getByRole('combobox', { name: /status/i })).toBeInTheDocument();
		expect(
			getByRole('textbox', { name: /competitors/i })
		).toBeInTheDocument();
		expect(getByRole('textbox', { name: /team/i })).toBeInTheDocument();
		// expect(getByRole('textbox', { name: /additional_information/i })).toBeInTheDocument();
		// expect(getByRole('switch', { name: /is_published/i })).toBeInTheDocument();
	});

	it('should validate CreateEditIdeaForm fields', () => {
		const mockSaveIdea = jest.fn();
		const { getByRole } = render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<CreateEditIdeaForm />
			</MockedProvider>
		);

		fireEvent.input(getByRole('textbox', { name: /name/i })),
			{
				target: {
					value: 'A new idea name'
				}
			};

		fireEvent.input(getByRole('textbox', { name: /description/i })),
			{
				target: {
					value: 'A new idea description'
				}
			};

		fireEvent.submit(getByRole('button'));
		expect(mockSaveIdea).not.toBeCalled();
	});

	// it('should populate CreateEditIdeaForm fields', () => {
	// 	const { getByRole } = render(
	// 		<MockedProvider mocks={mocks} addTypename={false}>
	// 			<CreateEditIdeaForm idea={idea} />
	// 		</MockedProvider>
	// 	);

	// 	expect(getByRole('form')).toHaveFormValues({
	// 		name: 'Idea name',
	// 		description: 'Some idea description',
	// 		additional_information: 'Some additional information',
	// 		business_plan: 'Some business plan',
	// 		team: 'Some team',
	// 		competitors: 'Some competitors',
	// 		mission_statement: 'Some mission statement',
	// 		field: 'Finance',
	// 		is_published: true
	// 	});
	// })
});
