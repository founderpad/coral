import { useBreakpointValue } from '@chakra-ui/react';
import MobileNavigationContext from 'context/MobileNavigationContext';
import NotificationContext from 'context/NotificationContext';
import { pageview } from 'lib/ga';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef } from 'react';

enum Params {
	edit
}

// export const usePageChange = () => {
// 	const router = useRouter();
// 	const { removeNotification, notification } = useNotification();

// 	useEffect(() => {
// 		if (notification) {
// 			console.log('fgfggh');

// 			removeNotification();
// 		}
// 	}, [useRouter().pathname]);

// 	router.events.on('routeChangeStart', handleRouteChange)
// };

export const useEditMode = (): any => useRouter().query[Params.edit];

export const useQueryParam = (param: string) =>
	useRouter().query[param] as string;

export const usePathMatch = (value: string): boolean =>
	value.includes(useRouter().pathname);

export const useMobile = () => useBreakpointValue({ base: true, md: false });

export const useScrollToBottom = (_data?: any) => {
	const ref = useRef(null);

	const scrollToBottom = (): void => {
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
			pageview(url);
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

export const useNotification = () => {
	const { notification, addNotification, removeNotification } =
		useContext(NotificationContext);
	return { notification, addNotification, removeNotification };
};

export const useMobileNav = () => {
	const { isOpen, onToggle } = useContext(MobileNavigationContext);

	return { isOpen, onToggle };
};
