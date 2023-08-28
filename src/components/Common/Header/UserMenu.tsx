import { Avatar, MenuItem, OverflowMenu } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export const UserMenu = (): React.ReactElement => {
	const [visible, setVisible] = React.useState(false);
	const [selectedIndex, setSelectedIndex] = React.useState(null);

	const onItemSelect = (index): void => {
		setSelectedIndex(index);
		setVisible(false);
	};

	const renderToggleButton = (): React.ReactElement => (
		<TouchableOpacity onPress={() => setVisible(true)}>
			<Avatar
				source={{
					uri: 'https://www.upwork.com/profile-portraits/c1vcWRuud_e6-NEr5VAinMbxHgeQlyvbxaZYgo80kIGajoU1ZqO49otW7edSoCpkni',
				}}
			/>
		</TouchableOpacity>
	);

	return (
		// <Layout style={styles.container} level='1'>
		<OverflowMenu
			anchor={renderToggleButton}
			backdropStyle={styles.backdrop}
			visible={visible}
			selectedIndex={selectedIndex}
			onSelect={onItemSelect}
			onBackdropPress={() => setVisible(false)}
		>
			<MenuItem title='Users' />
			<MenuItem title='Orders' />
			<MenuItem title='Transactions' />
		</OverflowMenu>
		// </Layout>
	);
};

const styles = StyleSheet.create({
	container: {
		minHeight: 144,
	},
	backdrop: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
});
