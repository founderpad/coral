import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';

export const EMAIL_REGEX =
/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

export const formatDate = (dateStr: string, withTime?: boolean): string => {

// export const formatDate = (dateStr: string, withYear?: boolean, withTime?: boolean): string => {
	const date = new Date(dateStr);
	// const formatDateStr = 'dd MMM ' + (withYear ? 'yyyy' : '') + (withTime ? 'HH:mm' : '');
	// let formatDateStr = 'dd MMM';

	// if (withYear) formatDateStr += ' yyyy';
	// if (withTime) formatDateStr += ' HH:mm';

	// console.log("format date str: ", formatDateStr)

	if (isToday(date)) return 'Today' + (withTime ? ` at ${format(date, 'HH:mm')}` : '');
	if (isYesterday(date)) return 'Yesterday' + (withTime ? ` at ${format(date, 'HH:mm')}` : '');
	return format(date, 'dd MMM') + (withTime ? ` at ${format(date, 'HH:mm')}` : '');
};

// export const formatTimestamp = (timestamp: string): string => formatDate(new Date(parseInt(timestamp)).toString(), false, true);
export const formatTimestamp = (timestamp: string): string => formatDate(new Date(parseInt(timestamp)).toString(), false);