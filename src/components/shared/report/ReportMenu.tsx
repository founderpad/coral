import { SubmitButton } from '@/components/buttons';
import { BaseMenuItem } from '@/components/menu';
import { useModalDrawer } from '@/hooks/util';
import { IoFlagOutline } from 'react-icons/io5';
import ReportForm from './ReportForm';
import { IReportProps } from './types/ReportProps';

const ReportMenu = ({ title, content, report }: IReportProps) => {
	const { openModalDrawer } = useModalDrawer();

	const onClick = () => {
		openModalDrawer({
			title: `Report ${title}`,
			body: (
				<ReportForm title={title} report={report} content={content} />
			),
			action: (
				<SubmitButton
					name="open-modal-drawer-button"
					form="report-form"
					label="Report"
					variant="outline"
					colorScheme="red"
				/>
			)
		});
	};

	return (
		<BaseMenuItem
			name="report-button"
			title="Report"
			icon={IoFlagOutline}
			onClick={onClick}
			aria-label="report-button"
		/>
	);
};

export default ReportMenu;
