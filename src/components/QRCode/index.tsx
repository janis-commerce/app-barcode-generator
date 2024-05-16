import React from 'react';
import QRCodePkg from 'react-qr-code';

export interface QrCodeProps {
	size?: number;
	value: unknown;
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

	const valueParsed = typeof value === 'string' ? value : JSON.stringify(value);

	return (
		<QRCodePkg
			value={valueParsed as string}
			size={Number(size)}
			bgColor={backgroundColor}
			fgColor={foregroundColor}
		/>
	);
};

export default QRCode;
