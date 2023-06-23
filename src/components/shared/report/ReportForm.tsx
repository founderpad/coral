import { BaseForm } from '@/components/form';
import { FormSelect } from '@/components/form/inputs/FormField';
import { Label } from '@/components/labels';
import { TReport_Insert_Input } from '@/generated/api';
import { REPORT_REASONS } from '@/utils/Constants';
import useReport from './hooks/useReport';
import { IReportProps } from './types/ReportProps';
import { schema } from './validationSchema';

const ReportForm = ({ title, content = undefined, report }: IReportProps) => {
	const { onAddReport } = useReport(report, title);
	const defaultValues: TReport_Insert_Input = { reason: '' };

	return (
		<BaseForm<TReport_Insert_Input, typeof schema>
			name="report-form"
			onSubmit={onAddReport}
			defaultValues={defaultValues}
			schema={schema}
		>
			{({ register, control, resetField, formState: { errors } }) => (
				<>
					{content && <Label>{content}</Label>}
					<FormSelect<TReport_Insert_Input>
						id="reason"
						name="reason"
						label={`Why do you want to report this ${title}?`}
						placeholder="reason"
						options={REPORT_REASONS}
						register={register}
						control={control}
						errors={errors}
						onClear={() =>
							resetField('reason', { defaultValue: '' })
						}
					/>
				</>
			)}
		</BaseForm>
	);
};

export default ReportForm;
