import { SubmitButton } from '@/components/buttons';
import { BaseForm } from '@/components/form';
import { FormSelect } from '@/components/form/inputs/FormField';
import { IoFlagOutline } from '@/components/icons';
import { Label } from '@/components/labels';
import { BaseMenuItem } from '@/components/menu';
import { TReport_Insert_Input, useCreateReportMutation } from '@generated/api';
import { useSuccessNotification } from '@/hooks/toast';
import { useModalDrawer } from '@/hooks/util';
import { REPORT_REASONS } from '@/utils/Constants';
import React from 'react';

type TReportProps = {
	title: string;
	report: TReport_Insert_Input;
	content?: React.ReactNode;
};

const ReportMenu = ({ title, content, report }: TReportProps) => {
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
			// subTitle={`Report this ${title.toLowerCase()}`}
			icon={IoFlagOutline}
			onClick={onClick}
			aria-label="report-button"
		/>
	);
};

const ReportForm = ({ title, content = undefined, report }: TReportProps) => {
	const { closeModalDrawer } = useModalDrawer();
	const showSuccessNotification = useSuccessNotification();
	const [addReport] = useCreateReportMutation();

	const defaultValues: TReport_Insert_Input = { reason: '' };

	const onAddReport = (
		reportValues: Pick<TReport_Insert_Input, 'reason'>
	) => {
		addReport({
			variables: {
				report: { ...report, reason: reportValues.reason }
			},
			onCompleted: () => {
				closeModalDrawer();
				// redirectTo(false, 'rp');
				showSuccessNotification({
					title: `This ${title} has been reported.`
				});
			}
		});
	};

	return (
		<BaseForm<TReport_Insert_Input>
			name="report-form"
			onSubmit={onAddReport}
			defaultValues={defaultValues}
		>
			{({ register, control, resetField, formState: { errors } }) => (
				<React.Fragment>
					{content && <Label>{content}</Label>}
					<FormSelect<TReport_Insert_Input>
						id="reason"
						name="reason"
						label={`Why do you want to report this ${title}?`}
						placeholder="reason"
						options={REPORT_REASONS}
						register={register}
						control={control}
						rules={{
							required: 'You must provide a reason'
						}}
						errors={errors}
						onClear={() =>
							resetField('reason', { defaultValue: '' })
						}
					/>
				</React.Fragment>
			)}
		</BaseForm>
	);
};

export default ReportMenu;
