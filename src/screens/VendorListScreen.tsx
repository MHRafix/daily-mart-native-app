import { SimpleLineIcons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserMenu } from '../components/Common/Header/UserMenu';

interface VendorListScreenProps {
	navigation: any;
	route: any;
}

const VendorListScreen = ({ navigation, route }: VendorListScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: '',
			headerStyle: {
				backgroundColor: '#fff',
			},
			headerTitleStyle: {
				fontSize: 17,
				color: 'black',
				alignSelf: 'center',
			},
			headerLeft: () => (
				<View>
					<TouchableOpacity activeOpacity={0.5}>
						<SimpleLineIcons name='menu' size={24} color='black' />
					</TouchableOpacity>
				</View>
			),

			headerRight: () => (
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-end',
						gap: 15,
						width: 180,
					}}
				>
					<UserMenu />
				</View>
			),
		});
	}, [navigation]);
	return (
		<SafeAreaView style={styles.container}>
			<Text>Service type name: {route?.params?.serviceTypeName}</Text>
			<Text>Service id: {route?.params?.id}</Text>
		</SafeAreaView>
	);
};

export default VendorListScreen;

const styles = StyleSheet.create({
	container: {},
});
