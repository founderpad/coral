import { Box, BoxProps } from '@chakra-ui/react';
import { EditButton } from '@components/buttons';
import { PrimaryButton } from '@components/buttons/PrimaryButton';
import { FlexLayout } from '@components/layouts';
import ModalDrawerContext from '@context/ModalDrawerContext';
import 'cropperjs/dist/cropper.css';
import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState
} from 'react';
import Cropper from 'react-cropper';

type Props = BoxProps & {
	onUpload: (image: File) => void;
	defaultSrc?: string;
	edit?: () => void;
	title: string;
};

export const ImageUploader = (props: Props) => {
	const { onUpload, defaultSrc, children, title } = props;
	const [image, setImage] = useState(defaultSrc);
	const [file, setFile] = useState<File | undefined>(undefined);
	// const [uploading, setUploading] = useState(false);

	const { setModalDrawer } = useContext(ModalDrawerContext);
	const cropperRef = useRef<HTMLImageElement>(null);

	const MAX_SIZE = 3145728;

	const getCropData = useCallback(async () => {
		// setUploading(true);
		const imageElement: any = cropperRef?.current;
		const cropper: any = imageElement?.cropper;
		// console.log(cropper.getCroppedCanvas().toDataURL());

		const res: Response = await fetch(
			cropper.getCroppedCanvas().toDataURL()
		);
		const blob: Blob = await res.blob();
		if (file) onUpload(new File([blob], file.name, { type: 'image/jpg' }));
	}, [file, onUpload]);

	const onOpenCropperModal = useCallback(() => {
		setModalDrawer({
			isOpen: true,
			title,
			action: (
				<PrimaryButton
					name="crop-image-modal-button"
					onClick={getCropData}
				>
					Upload
				</PrimaryButton>
			),
			body: (
				<Box position="relative">
					<Cropper
						initialAspectRatio={1}
						preview=".img-preview"
						src={image}
						viewMode={1}
						minCropBoxHeight={125}
						minCropBoxWidth={125}
						autoCrop={true}
						background={false}
						responsive={true}
						checkOrientation={false}
						ref={cropperRef}
						style={{ position: 'relative', overflow: 'hidden' }}
						guides={true}
					/>

					<Box
						position="absolute"
						bottom={0}
						right={0}
						boxSize="60px"
						bg="rgba(0, 0, 0, 0.4)"
						overflow="hidden"
						className="img-preview"
						style={{
							height: '60px !important',
							width: '60px !important'
						}}
					/>
				</Box>
			),
			hideFooter: true,
			removePadding: true
		});
	}, [setModalDrawer, image, getCropData, title]);

	useEffect(() => {
		if (file) onOpenCropperModal();
	}, [file]); // eslint-disable-line react-hooks/exhaustive-deps

	const onChange = async (e: any) => {
		e.preventDefault();
		let files: File[] = [];

		try {
			if (e.dataTransfer) {
				files = e.dataTransfer.files;
			} else if (e.target) {
				files = e.target.files;
			}

			const reader = new FileReader();
			reader.onload = () => {
				checkValidation(reader.result as any, files[0]);
			};

			reader.onerror = (_err) => {
				// console.log(err);
			};

			if (files[0]?.type.includes('image'))
				reader.readAsDataURL(files[0]);
		} catch (e) {
			console.error(e);
		}
	};

	const checkValidation = async (imageBase64: any, file: File) => {
		const n = imageBase64.length;
		const x = n * (3 / 4) - 1;
		if (x > MAX_SIZE) {
			return;
		}

		setImage(imageBase64);
		setFile(file);
	};

	const onInputClick = (
		event: React.MouseEvent<HTMLInputElement, MouseEvent>
	) => {
		const element = event.target as HTMLInputElement;
		element.value = '';
	};

	return (
		<FlexLayout
			flex={1}
			as="label"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			position="relative"
			rounded="full"
			boxSize={{ base: 100, md: 120 }}
		>
			<input
				id="image-upload"
				type="file"
				onChange={onChange}
				onClick={onInputClick}
				style={{ display: 'none' }}
			/>

			<EditButton
				as="label"
				onClick={undefined}
				htmlFor="image-upload"
				bg="white"
				size="sm"
				boxShadow="md"
				cursor="pointer"
				aria-label={props['aria-label'] || 'Edit image button'}
				title={props.title}
				position="absolute"
				bottom={0}
				transform="translateY(5%) translateX(125%)"
				zIndex={1}
				borderWidth={1}
			/>
			<Box
				className="image"
				position="relative"
				rounded="full"
				boxSize={{ base: 100, md: 120 }}
				css={{
					'> img': {
						maxWidth: '100%',
						maxHeight: '100%'
					},
					':after': {
						content: 'close-quote',
						position: 'absolute',
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						transition: 'all .5s',
						'-webkit-transition': 'all .3s',
						borderRadius: '100%'
					},
					':hover:after': {
						backgroundColor: 'rgba(0, 0, 0, 0.4)',
						opacity: 1
					}
				}}
			>
				{children}
			</Box>
		</FlexLayout>
	);
};

export default ImageUploader;
