import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { EditButton } from 'components/buttons';
import { PrimaryButton } from 'components/buttons/PrimaryButton';
import ModalDrawerContext from 'context/ModalDrawerContext';
import 'cropperjs/dist/cropper.css';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Cropper from 'react-cropper';

type Props = BoxProps & {
	onUpload: (image: File) => void;
	defaultSrc?: string;
	edit?: () => void;
	title: string;
};

export const ImageUploader = (props: Props): JSX.Element => {
	const { onUpload, defaultSrc, children, title } = props;
	const [image, setImage] = useState(defaultSrc);
	const [file, setFile] = useState<File>(undefined);

	const { setModalDrawer } = useContext(ModalDrawerContext);
	const cropperRef = useRef<HTMLImageElement>(null);

	const MAX_SIZE = 3145728;

	useEffect(() => {
		if (file) onOpenCropperModal();
	}, [file]);

	const onChange = async (e: any) => {
		e.preventDefault();
		let files: File[];

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

			reader.onerror = (err) => {
				console.log(err);
			};

			if (files[0].type.includes('image')) reader.readAsDataURL(files[0]);
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

	const onOpenCropperModal = () => {
		setModalDrawer({
			isOpen: true,
			title,
			actions: (
				<PrimaryButton
					name={'crop-image-modal-button'}
					size={'sm'}
					onClick={getCropData}
				>
					Upload
				</PrimaryButton>
			),
			body: (
				<Box position={'relative'}>
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
						style={{ position: 'relative' }}
						guides={true}
					/>

					<Box
						position={'absolute'}
						bottom={0}
						right={0}
						boxSize={'60px'}
						bg={'rgba(0,0,0,0.4)'}
						overflow={'hidden'}
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
	};

	const getCropData = async () => {
		const imageElement: any = cropperRef?.current;
		const cropper: any = imageElement?.cropper;
		// console.log(cropper.getCroppedCanvas().toDataURL());

		const res: Response = await fetch(
			cropper.getCroppedCanvas().toDataURL()
		);
		const blob: Blob = await res.blob();
		onUpload(new File([blob], file.name, { type: 'image/jpg' }));
	};

	const onInputClick = (
		event: React.MouseEvent<HTMLInputElement, MouseEvent>
	) => {
		const element = event.target as HTMLInputElement;
		element.value = '';
	};

	return (
		<>
			<input
				id={'image-upload'}
				type="file"
				onChange={onChange}
				onClick={onInputClick}
				style={{ display: 'none' }}
			/>

			<Flex
				bg={'gray.900'}
				flex={1}
				as={'label'}
				boxSize={140}
				justifyContent={'center'}
				alignItems={'center'}
				flexDirection={'column'}
				position={'relative'}
				rounded={'full'}
				boxShadow={'lg'}
			>
				<Box
					position={'absolute'}
					bottom={0}
					transform={'translateY(25%)translateX(100%)'}
					as={'label'}
					cursor={'pointer'}
					bg={'white'}
					zIndex={1}
					rounded={'full'}
				>
					<EditButton
						as={'label'}
						onClick={undefined}
						htmlFor={'image-upload'}
						bg={'white'}
						boxShadow={'md'}
						size={'sm'}
						cursor={'pointer'}
						aria-label={props['aria-label']}
						title={props.title}
					/>
				</Box>
				<Box
					className="image"
					position={'relative'}
					rounded={'full'}
					boxSize={140}
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
			</Flex>
		</>
	);
};

export default ImageUploader;
