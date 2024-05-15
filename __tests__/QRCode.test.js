import React from 'react';
import QRCode from '../src/components/QRCode';
import {create} from 'react-test-renderer';

describe('Barcode component', () => {
	it('should not return component when value is undefined', () => {
		const BarcodeComponent = create(<QRCode />).toJSON();
		expect(BarcodeComponent).toBeFalsy();
	});

	it('should return component when value is valid', () => {
		const BarcodeComponent = create(<QRCode value={2} size={200} />).toJSON();

		expect(BarcodeComponent).toBeTruthy();
		expect(BarcodeComponent.props.width).toBe(200);
		expect(BarcodeComponent.props.height).toBe(200);
	});
});
