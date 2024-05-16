import React from 'react';
import QRCodePkg from 'react-qr-code';

export interface QrCodeProps {
	size?: number;
	value: string;
	backgroundColor?: string;
	foregroundColor?: string;
}

const QRCode = ({
	value,
	size = 100,
	backgroundColor = '#FFF',
	foregroundColor = '#000',
}: QrCodeProps) => {
	if (!value) {
		return null;
	}

	const valueParsed = typeof value === 'string' ? JSON.stringify(value) : value;
	return (
		<QRCodePkg
			value={valueParsed}
			size={Number(size)}
			bgColor={backgroundColor}
			fgColor={foregroundColor}
		/>
	);
};

export default QRCode;
