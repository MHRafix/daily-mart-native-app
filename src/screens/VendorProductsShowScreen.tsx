import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface VendorProductsShowScreenProps {
	navigation: any;
	route: any;
}

const VendorProductsShowScreen = ({
	navigation,
	route,
}: VendorProductsShowScreenProps) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>{route?.params?.vendorId}</Text>
		</SafeAreaView>
	);
};

export default VendorProductsShowScreen;

const styles = StyleSheet.create({
	container: {},
});
