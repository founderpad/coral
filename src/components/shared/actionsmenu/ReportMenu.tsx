import { SubmitButton } from '@components/buttons';
import { Form } from '@components/form';
import { IoFlagSharp } from '@components/icons';
import { SelectField } from '@components/input';
import { Label } from '@components/labels';
import { BaseMenuItem } from '@components/menu';
import ModalDrawerContext from '@context/ModalDrawerContext';
import { TReport_Insert_Input, useCreateReportMutation } from '@generated/api';
import { useSuccessNotification } from '@hooks/toast';
import { reportReasonsList } from '@utils/Constants';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

const ReportMenu = ({
	title,
	content,
	report
}: {
	title: string;
	content: any;
	report: TReport_Insert_Input;
}) => {
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const onClick = () => {
		setModalDrawer({
			title: `Report ${title}`,
			isOpen: true,
			body: (
				<ReportForm title={title} report={report} content={content} />
			),
			actions: (
				<SubmitButton
					name={'open-modal-drawer-button'}
					form="reportForm"
					label={'Report'}
					size={'xs'}
				/>
			),
			handler: () => console.log(''),
			noBtnLabel: 'Cancel',
			hideFooter: true
		});
	};

	return (
		<BaseMenuItem
			title={'Report'}
			// subTitle={`Report this ${title.toLowerCase()}`}
			icon={IoFlagSharp}
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
		getValues,
		formState: { errors, isSubmitting, isValid }
	} = useForm<{ reason: string }>();
	const { setModalDrawer } = useContext(ModalDrawerContext);
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
			id={'reportForm'}
			name={'reportForm'}
			onSubmit={handleSubmit(addReport)}
			isSubmitting={isSubmitting}
			isValid={isValid}
		>
			{content && <Label>{content}</Label>}
			<SelectField
				id="reason"
				name="reason"
				label={`Why do you want to report this ${title}?`}
				options={reportReasonsList()}
				error={errors['reason']}
				// errorText="You must provide a reason"
				control={control}
				isRequired
			/>
		</Form>
	);
};

export default ReportMenu;
