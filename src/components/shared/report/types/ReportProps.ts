import { TReport_Insert_Input } from '@/generated/api';

export interface IReportProps {
	title: string;
	report: TReport_Insert_Input;
	content?: React.ReactNode;
}
