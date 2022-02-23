import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { FormSelect } from '@components/form/inputs/FormField';
import { IoFlagOutline } from '@components/icons';
import { Label } from '@components/labels';
import { BaseMenuItem } from '@components/menu';
import { TReport_Insert_Input, useCreateReportMutation } from '@generated/api';
import { useSuccessNotification } from '@hooks/toast';
import { useMobile, useModalDrawer } from '@hooks/util';
import { REPORT_REASONS } from '@utils/Constants';
import React from 'react';
import { useForm } from 'react-hook-form';

const ReportMenu = ({
	title,
	content,
	report
}: {
	title: string;
	content: React.ReactNode;
	report: TReport_Insert_Input;
}) => {
	const { setModalDrawer } = useModalDrawer();

	const onClick = () => {
		setModalDrawer({
			title: `Report ${title}`,
			isOpen: true,
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
			title="Report"
			// subTitle={`Report this ${title.toLowerCase()}`}
			icon={IoFlagOutline}
			onClick={onClick}
		/>
	);
};

const ReportForm = ({
	title,
	content = undefined,
	report
}: {
	title: string;
	content?: any;
	report: TReport_Insert_Input;
}) => {
	const {
		handleSubmit,
		control,
		register,
		resetField,
		getValues,
		formState: { errors }
	} = useForm<TReport_Insert_Input>({
		mode: 'all',
		defaultValues: {
			reason: ''
		}
	});

	const isMobile = useMobile();
	const { setModalDrawer } = useModalDrawer();
	const showSuccessNotification = useSuccessNotification();

	const [addReport] = useCreateReportMutation({
		variables: {
			report: { ...report, reason: getValues('reason') } // reason for report
		},
		onCompleted: () => {
			setModalDrawer({
				isOpen: false
			});
			showSuccessNotification({
				title: `This ${title} has been reported.`
			});
		}
	});

	return (
		<Form
			id="report-form"
			name="report-form"
			onSubmit={handleSubmit(addReport)}
		>
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
					required: 'You must provide your objective on this platform'
				}}
				errors={errors}
				onClear={() => resetField('reason', { defaultValue: '' })}
				selectProps={{
					menuPlacement: isMobile ? 'top' : 'bottom'
				}}
			/>
		</Form>
	);
};

export default ReportMenu;
