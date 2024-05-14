import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Barcode from './components/Barcode';

const App = () => {
	const value = '9698307456265';

	return (
		<SafeAreaView>
			<View>
				<Barcode value={value} format="CODE128" text="test" />
			</View>
		</SafeAreaView>
	);
};

export default App;
