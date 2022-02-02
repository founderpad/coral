interface analyticsWindow extends Window {
	gtag: any;
}

declare const window: analyticsWindow;

// log the pageview with their URL
export function pageview(url: string) {
	if (typeof window.gtag !== 'undefined')
		window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
			page_path: url
		});
}

// log specific events happening.
export function event({ action, params }: { action: any; params: any }) {
	if (typeof window.gtag !== 'undefined')
		window.gtag('event', action, params);
}
