import { SubmitButton } from 'components/buttons';
import { Form } from 'components/form';
import { useBaseForm } from 'components/form/hooks';
import { SelectField } from 'components/input';
import { BaseMenuItem } from 'components/menu';
import ModalDrawerContext from 'context/ModalDrawerContext';
import { TReport_Insert_Input, useCreateReportMutation } from 'generated/api';
import { useSuccessNotification } from 'hooks/toast';
import React, { useContext } from 'react';
import { IoFlagSharp } from 'react-icons/io5';
import { reportReasonsList } from 'utils/Constants';

const ReportMenu = ({
	title,
	report
}: {
	title: string;
	report: TReport_Insert_Input;
}): JSX.Element => {
	const { setModalDrawer } = useContext(ModalDrawerContext);

	const onClick = () => {
		setModalDrawer({
			title: `Report ${title}`,
			isOpen: true,
			body: <ReportForm title={title} report={report} />,
			actions: (
				<SubmitButton
					name={'open-modal-drawer-experience-button'}
					form="reportForm"
					label={'Report'}
					size={'sm'}
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
			subTitle={'Report this idea'}
			icon={IoFlagSharp}
			onClick={onClick}
		/>
	);
};

const ReportForm = ({
	title,
	report
}: {
	title: string;
	report: TReport_Insert_Input;
}) => {
	const {
		handleSubmit,
		control,
		getValues,
		formState: { errors, isSubmitting, isValid }
	} = useBaseForm<{ reason: string }>();
	const { setModalDrawer } = useContext(ModalDrawerContext);
	const showSuccessNotification = useSuccessNotification();

	const [createReportMutation] = useCreateReportMutation({
		variables: {
			report: { ...report, reason: getValues('reason') } // reason for report
		},
		onCompleted: (_data) => {
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
			onSubmit={handleSubmit(createReportMutation)}
			isSubmitting={isSubmitting}
			isValid={isValid}
		>
			<SelectField
				id="reason"
				name="reason"
				label={`Why do you want to report this ${title}?`}
				options={reportReasonsList()}
				error={errors['reason']}
				errorText="You must provide a reason"
				control={control}
				isRequired
			/>
		</Form>
	);
};

export default ReportMenu;
