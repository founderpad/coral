import { TReport_Insert_Input, useCreateReportMutation } from '@/generated/api';
import { useModalDrawer, useNotification } from '@/hooks/util';

const useReport = (report: TReport_Insert_Input, title = '') => {
	const { closeModalDrawer } = useModalDrawer();
	const [addReport] = useCreateReportMutation();
	const { addNotification } = useNotification();

	const onAddReport = (
		reportValues: Pick<TReport_Insert_Input, 'reason'>
	) => {
		addReport({
			variables: {
				report: { ...report, reason: reportValues.reason }
			},
			onCompleted: () => {
				closeModalDrawer();
				addNotification({
					message: `This ${title} has been reported.`,
					status: 'success'
				});
			},
			onError: () => {
				addNotification({
					message: `Failed to report this ${title}. Please try again later.`,
					status: 'error'
				});
			}
		});
	};

	return { onAddReport };
};

export default useReport;
