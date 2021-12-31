import { useBreakpointValue } from '@chakra-ui/react';
import * as ga from 'lib/ga';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

enum Params {
	edit
}

export const useEditMode = (): any => useRouter().query[Params.edit];

export const useQueryParam = (param: string) =>
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

export const useTrackAnalytics = () => {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			ga.pageview(url);
		};

		// When the component is mounted, subscribe to router changes
		// and log those page views
		router.events.on('routeChangeComplete', handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);
};
