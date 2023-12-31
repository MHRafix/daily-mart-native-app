import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IServiceType } from '../../../app/model/ServiceTypes.model';
import { COLORS } from '../../../app/utils/colors';

interface ServiceCardProps {
	serviceType: IServiceType;
	handleRedirect: () => void;
}

const ServiceCard = ({ serviceType, handleRedirect }: ServiceCardProps) => {
	return (
		<TouchableOpacity
			onPress={handleRedirect}
			activeOpacity={0.7}
			style={[styles.card, styles.shadow]}
		>
			<Image
				borderRadius={20}
				source={{
					uri: serviceType?.image,
					width: 326,
					height: 200,
				}}
			/>

			<View
				style={{
					paddingHorizontal: 8,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						marginTop: 10,
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							fontSize: 22,
							fontWeight: '700',
							marginBottom: 5,
						}}
					>
						{serviceType?.name}
					</Text>
					<Text
						style={{
							fontSize: 16,
							fontWeight: '600',
							color: COLORS.orange,
							marginBottom: 10,
							backgroundColor: COLORS.gray,
							borderRadius: 7,
							paddingHorizontal: 15,
							paddingVertical: 7,
						}}
					>
						{serviceType?.vendorCount}
					</Text>
				</View>

				<View
					style={{
						flexDirection: 'row',
						gap: 10,
					}}
				>
					<MaterialCommunityIcons
						name='bike-fast'
						size={20}
						color={COLORS.orange}
					/>

					<Text>Fast delivery</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ServiceCard;

const styles = StyleSheet.create({
	card: {
		marginBottom: 20,
		backgroundColor: '#fff',
		paddingBottom: 20,
		marginHorizontal: 2,
		borderRadius: 20,
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 1,
		shadowRadius: 10000000000,

		elevation: 3,
	},
});
