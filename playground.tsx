import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import Barcode from './src/components/Barcode';
import QRCode from './src/components/QRCode';

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	wrapper: {
		flex: 1,
		padding: 20,
		flexDirection: 'column',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
const BarcodeGenerator = () => {
	const value = '23';

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.wrapper}>
				<View style={styles.container}>
					<Barcode value={value} format="EAN8" text={<Text>{String(value)}</Text>} />
				</View>
				<View style={styles.container}>
					<QRCode value={JSON.stringify(value)} size={150} />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default BarcodeGenerator;
