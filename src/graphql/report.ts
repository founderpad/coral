import gql from 'graphql-tag';

const CREATE_REPORT = gql`
	mutation createReport($report: report_insert_input!) {
		insert_report_one(object: $report) {
			id
		}
	}
`;

export { CREATE_REPORT };
