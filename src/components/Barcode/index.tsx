import React from 'react';
import BarcodePkg from '@kichiyaki/react-native-barcode-generator';

export type Format =
	| 'CODE39'
	| 'CODE128'
	| 'CODE128A'
	| 'CODE128B'
	| 'CODE128C'
	| 'EAN13'
	| 'EAN8'
	| 'EAN5'
	| 'EAN2'
	| 'UPC'
	| 'UPCE'
	| 'ITF14'
	| 'ITF'
	| 'MSI'
	| 'MSI10'
	| 'MSI11'
	| 'MSI1010'
	| 'MSI1110'
	| 'pharmacode'
	| 'codabar';

export interface BarcodeProps {
	value: string;
	format: Format;
	text?: string | React.ReactNode;
	backgroundColor?: string;
	width?: number;
	height?: number;
	onError?: (error: Error) => void;
}
const Barcode = ({value, format, text, onError, backgroundColor = '#fff', width = 2, height = 100}: BarcodeProps) => {
	if (!value || !format || typeof value !== 'string') {
		return null;
	}
	return (
		<BarcodePkg
			value={String(value)}
			text={text}
			format={format}
			background={backgroundColor}
			width={width}
			height={height}
			onError={onError}
		/>
	);
};

export default Barcode;
