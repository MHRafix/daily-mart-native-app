import { SimpleLineIcons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from '@ui-kitten/components';
import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import businessVendorApi from '../app/Services/BusinessVendor.api';
import { IBusinessVendor } from '../app/model/BusinessVendor.model';
import { UserMenu } from '../components/Common/Header/UserMenu';
import BusinessVendorCard from '../components/Custom/VendorList/BusinessVendorCard';

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

	const {
		data: businessVendors,
		isLoading,
		refetch,
	} = useQuery<IBusinessVendor[]>(
		[`vendorList_of_service_[${route?.params?.serviceId}]`],
		async () => {
			const vendors = await businessVendorApi.getBusinessVendorsListByServiceId(
				route?.params?.serviceId
			);
			return vendors?.data;
		}
	);
	console.log('businessVendors:', businessVendors);

	const handleRedirect = (id: string) => {
		// navigation.navigate('VendorList', {
		// 	vendorId: id,
		// });
	};
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				style={{ paddingTop: 10, paddingHorizontal: 15, marginVertical: 20 }}
			>
				{businessVendors?.map((businessVendor, idx) => (
					<BusinessVendorCard
						key={idx}
						businessVendor={businessVendor}
						handleRedirect={() => handleRedirect(businessVendor?._id)}
					/>
				))}

				{isLoading && (
					<Spinner size='large' style={{ borderColor: 'orange' }} />
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default VendorListScreen;

const styles = StyleSheet.create({
	container: {},
});
