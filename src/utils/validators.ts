import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';
import { IUploadedFileProps } from '../types/upload';

export const EMAIL_REGEX =
	/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

export const formatDate = (
	dateStr: string,
	withTime?: boolean,
	withYear?: boolean
): string | undefined => {
	if (!dateStr) return;
	const date = new Date(dateStr);

	if (isToday(date))
		return 'Today' + (withTime ? ` ${format(date, 'HH:mm')}` : '');
	if (isYesterday(date))
		return 'Yesterday' + (withTime ? ` ${format(date, 'HH:mm')}` : '');
	return (
		format(date, 'dd MMM') +
		(withTime ? ` at ${format(date, 'HH:mm')}` : '') +
		(withYear ? `, ${format(date, 'yyyy')}` : '')
	);
};

// const capitalizeFirstLetter = (value: string) => {
// 	if (value.length > 1) {
// 		let result = value;
// 		result = result.substr(0,1).toUpperCase() + result.substr(1);
// 	}

// 	return null;
// }

export const formatTimestamp = (timestamp: string) =>
	formatDate(new Date(parseInt(timestamp)).toString(), false);

export const convertCapacityToString = (capacity: number) => {
	// if (!capacity) return;

	const capacityStr = capacity.toString();
	if (capacityStr.length === 3) {
		return `${capacityStr.substr(0, 1)} - ${capacityStr.substr(1, 3)}`;
	}
	if (capacityStr.length === 4) {
		return `${capacityStr.substr(0, 2)} - ${capacityStr.substr(2, 4)}`;
	} else {
		return `${capacityStr}+`;
	}
};

export const formatUploadedUrls = (
	uploadedUrls: Array<string>
): Array<IUploadedFileProps> => {
	if (!uploadedUrls.length) return [];

	let uploadedFiles: IUploadedFileProps[] = [];

	for (const uploadedUrl of uploadedUrls) {
		let uploadedFile: IUploadedFileProps = {
			fileId: '',
			fileUrl: '',
			uploadedAt: ''
		};

		uploadedFile.fileId = uploadedUrl.split('files/')[1].split('?v=')[0];
		uploadedFile.fileUrl = uploadedUrl;
		uploadedFile.uploadedAt = uploadedUrl
			.split('files/')[1]
			.split('?v=')[1];

		uploadedFiles.push(uploadedFile);
	}

	return uploadedFiles;
};
