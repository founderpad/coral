import { useBreakpointValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

enum Params {
	edit
}

export const useEditMode = (): any => useRouter().query[Params.edit];

export const useQueryParam = (param: string): string =>
	useRouter().query[param] as string;

export const usePathMatch = (value: string): boolean =>
	value.includes(useRouter().pathname);

export const useMobile = () => useBreakpointValue({ base: true, md: false });

export const useScrollToBottom = (data?: any) => {
	const ref = useRef(null);

	const scrollToBottom = (): void => {
		console.log('container current: ', ref.current);

		if (ref.current)
			ref.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'start'
			});
	};

	useEffect(() => {
		if (ref.current) {
			scrollToBottom();
		}
	});

	return { ref, scrollToBottom };
};
