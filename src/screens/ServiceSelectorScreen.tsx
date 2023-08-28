import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import { Button, Input, Layout, Spinner, Text } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect, useState } from 'react';
import {
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserMenu } from '../components/Common/Header/UserMenu';
import ServiceCard from '../components/Custom/ServiceSelector/ServiceCard';
import serviceTypesApi from '../components/app/Services/ServiceTypes.api';
import { IServiceType } from '../components/app/model/ServiceTypes.model';
import { COLORS } from '../components/app/utils/colors';

interface ServiceSelectorScreenProps {
	navigation: any;
	route: any;
}

const ServiceSelectorScreen = ({
	navigation,
	route,
}: ServiceSelectorScreenProps) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'aaaaaa',
			headerStyle: {
				backgroundColor: '#fff',
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

	const [search, setSearch] = useState<string>();
	const [serviceTypes, setServiceTypes] = useState<IServiceType[]>();

	const { data, isLoading, refetch } = useQuery<IServiceType[]>(
		['serviceTypes'],
		async () => {
			const services = await serviceTypesApi.getServiceTypes();
			return services?.data;
		},
		{
			onSuccess(data) {
				setServiceTypes(data);
			},
		}
	);

	const handleSearch = () => {
		search
			? setServiceTypes(
					data?.filter((service: IServiceType) =>
						service?.name?.toLowerCase()?.includes?.(search?.toLowerCase())
					)
			  )
			: null;
	};

	const handleRedirect = (id: string, serviceTypeName: string) => {
		navigation.navigate('VendorList', {
			id,
			serviceTypeName,
		});
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
			<StatusBar style='dark' />

			<KeyboardAvoidingView
				style={styles.container}
				// keyboardVerticalOffset={90}
			>
				<Layout
					style={{
						paddingHorizontal: 15,
						backgroundColor: 'transparent',
					}}
				>
					<Text category='h1'>What would you like to buy</Text>

					<View
						style={{
							marginTop: 20,
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<Input
							style={styles.inputStyle}
							size='large'
							placeholder='Find your service or products'
							value={search}
							onChangeText={(text) => setSearch(text)}
						/>
						<TouchableOpacity>
							<Button
								onPress={handleSearch}
								size='large'
								style={{
									borderRadius: 10,
									borderColor: COLORS.orange,
									backgroundColor: COLORS.orange,
								}}
							>
								<Ionicons name='filter' color={'black'} />
							</Button>
						</TouchableOpacity>
					</View>
				</Layout>
				<ScrollView
					style={{ paddingTop: 10, paddingHorizontal: 15, marginVertical: 20 }}
				>
					{serviceTypes?.map((serviceType, idx) => (
						<ServiceCard
							key={idx}
							serviceType={serviceType}
							handleRedirect={() =>
								handleRedirect(serviceType?._id, serviceType?.name)
							}
						/>
					))}

					{isLoading && (
						<Spinner size='large' style={{ borderColor: 'orange' }} />
					)}
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default ServiceSelectorScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'red',
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,

		elevation: 12,
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 8,
		paddingVertical: 45,
		paddingHorizontal: 25,
		width: '100%',
		marginVertical: 10,
	},
	elevation: {
		elevation: 20,
		shadowColor: '#52006A',
	},
	inputContainerStyle: {},
	inputStyle: {
		width: '80%',
		backgroundColor: '#F3F3F3',
		borderWidth: 0,
		borderRadius: 10,
		fontSize: 17,
		// minHeight: 70,
	},
});
