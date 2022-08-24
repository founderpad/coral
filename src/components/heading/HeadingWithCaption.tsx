import { HeadingProps } from '@chakra-ui/react';
import React from 'react';
import { CaptionLabel } from '../labels/Label';
import { StackLayout } from '../layouts';
import BaseHeading from './BaseHeading';

type THeadingWithCaption = {
	headingProps: Pick<HeadingProps, 'fontSize' | 'color' | 'bgColor'>;
	heading: string;
	caption: string;
};

const HeadingWithCaption = ({
	headingProps,
	caption,
	heading
}: THeadingWithCaption) => {
	return (
		<StackLayout spacing={0}>
			<BaseHeading {...headingProps}>{heading}</BaseHeading>
			<CaptionLabel>{caption}</CaptionLabel>
		</StackLayout>
	);
};

export default HeadingWithCaption;
