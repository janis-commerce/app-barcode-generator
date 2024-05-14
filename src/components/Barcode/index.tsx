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
	background?: string;
}
const Barcode = ({value, format, text, background = '#fff'}: BarcodeProps) => {
	return (
		<BarcodePkg value={value} text={text} format={format} background={background} style={{}} />
	);
};

export default Barcode;
