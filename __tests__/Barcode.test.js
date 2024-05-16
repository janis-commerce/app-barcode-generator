import React from 'react';
import Barcode from '../src/components/Barcode';
import {create} from 'react-test-renderer';

describe('Barcode component', () => {
	it('should not return component when value or format are undefined or invalid', () => {
		expect(create(<Barcode />).toJSON()).toBeFalsy();
		expect(create(<Barcode value="1234567" />).toJSON()).toBeFalsy();
		expect(create(<Barcode value={2} />).toJSON()).toBeFalsy();
		expect(create(<Barcode value={[2]} />).toJSON()).toBeFalsy();
	});

	it('should  return component when value or format are valid', () => {
		expect(create(<Barcode value="123" format="CODE128" />).toJSON()).toBeTruthy();
	});
});
