import { useBreakpointValue } from '@chakra-ui/react';
import FileUploadContext from '@/context/FileUploadContext';
import MobileNavigationContext from '@/context/MobileNavigationContext';
import ModalDrawerContext from '@/context/ModalDrawerContext';
import NotificationContext from '@/context/NotificationContext';
import { pageview } from '@/lib/ga';
import { storage } from '@/pages/_app';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';

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

export const useEditMode = () => useRouter().query[Params.edit];

export const useQueryParam = <T extends string | string[] = string>(
	param: string
) => useRouter().query[param] as T;

export const usePathMatch = (value: string): boolean =>
	value.includes(useRouter().pathname);

export const useMobile = () => useBreakpointValue({ base: true, md: false });

export const useScrollToBottom = (_data?: any) => {
	const ref = useRef<null | HTMLElement>(null);

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

type TBucket = 'avatars' | 'resumes' | 'businessPlans' | 'pitchDecks';

interface IFileUploadProps {
	file: File;
	bucketId: TBucket;
	fileName?: string;
}

export const useFileUpload = () => {
	const uploadAvatar = async ({ file, bucketId }: IFileUploadProps) => {
		const response = await storage.upload({
			file,
			name: `${file.name.split('.')[0]}-${new Date().getTime()}`,
			bucketId
		});
		const fileId = response.fileMetadata?.id;
		if (fileId) return storage.getPublicUrl({ fileId });
		return null;
	};

	return { uploadAvatar };
};

export const useFileDelete = () => {
	return ({ fileId }: { fileId: string }) => {
		return storage.delete({ fileId });
	};
};

export const useCheckboxes = (allValues: string[], initialValues = []) => {
	const [values, setValues] = useState<string[]>(initialValues ?? []);
	const isAllSelected = values.length === allValues.length;

	const onToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.name;
		let valuesCopy = [...values];

		const index = valuesCopy.findIndex((v) => v === value);
		index > -1 ? valuesCopy.splice(index, 1) : valuesCopy.push(value);

		setValues(valuesCopy);
	};

	const onToggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) setValues(allValues);
		else setValues([]);
	};

	const isChecked = (value: string) => {
		return values.includes(value);
	};

	const clearValues = () => {
		setValues([]);
	};

	return {
		values,
		onToggle,
		onToggleAll,
		isChecked,
		isAllSelected,
		clearValues
	};
};

export const useFileUploader = () => {
	const {
		addAttachedFile,
		addAttachedFiles,
		uploadedFiles,
		attachedFiles,
		onUpload,
		removeAttachedFile,
		onDelete,
		isDeleted
	} = useContext(FileUploadContext);

	return {
		addAttachedFile,
		addAttachedFiles,
		uploadedFiles,
		attachedFiles,
		onUpload,
		removeAttachedFile,
		onDelete,
		isDeleted
	};
};

export const useModalDrawer = () => {
	const {
		modalDrawer,
		openModalDrawer,
		updateModalDrawer,
		closeModalDrawer
	} = useContext(ModalDrawerContext);

	return {
		modalDrawer,
		openModalDrawer,
		updateModalDrawer,
		closeModalDrawer
	};
};

export const useCheckboxToggle = (
	defaultValues: string[] = [],
	allValues: string[] = []
) => {
	const [values, setSelectedValues] = useState<Array<string>>(
		defaultValues ?? []
	);

	const [isAll, setIsAll] = useState(false);

	useEffect(() => {
		if (defaultValues.length === allValues.length) setIsAll(true);
	}, [allValues, defaultValues]);

	const toggleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.name;
		const valuesCopy = [...values];

		const index = valuesCopy.findIndex((v) => v === value);
		index > -1 ? valuesCopy.splice(index, 1) : valuesCopy.push(value);

		if (valuesCopy.length === allValues.length) setIsAll(true);
		if (isAll && valuesCopy.length !== allValues.length) setIsAll(false);
		// if (isAll) { setIsAll(false);

		setSelectedValues(valuesCopy);
	};

	const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.checked;

		if (value) {
			setIsAll(true);
			setSelectedValues(allValues);
		} else {
			setIsAll(false);
			setSelectedValues([]);
		}
	};

	const clearValues = () => {
		setSelectedValues([]);
		setIsAll(false);
	};

	return { values, clearValues, toggleValue, isAll, toggleAll };
};
