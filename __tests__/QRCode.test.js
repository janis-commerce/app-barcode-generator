import React from 'react';
import QRCode from '../src/components/QRCode';
import {create} from 'react-test-renderer';
import QRCodePkg from 'react-qr-code';

describe('Barcode component', () => {
	it('should not return component when value is undefined or invalid', () => {
		expect(create(<QRCode />).toJSON()).toBeFalsy();
	});

	it('should return component when value is valid', () => {
		const BarcodeComponent = create(
			<QRCode value={JSON.stringify({orderId: 23})} size={200} />
		).toJSON();

		expect(BarcodeComponent).toBeTruthy();
		expect(BarcodeComponent.props.width).toBe(200);
		expect(BarcodeComponent.props.height).toBe(200);
	});

	it('should return component with value type string', () => {
		const BarcodeComponentWithString = create(<QRCode value="2" />).root;
		const BarcodeComponentWithNotString = create(<QRCode value={{order: 1}} />).root;

		[BarcodeComponentWithString, BarcodeComponentWithNotString].forEach((Component) => {
			expect(typeof Component.findByType(QRCodePkg).props.value).toBe('string');
		});
	});
});
