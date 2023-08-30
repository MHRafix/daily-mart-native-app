import { focusManager } from '@tanstack/react-query';
import { AppRegistry, Platform, StyleSheet } from 'react-native';
import StackNavigators from './src/app/Navigators/StackNavigatorControll';
import AppGlobalProviders from './src/app/Providers/AppGlobalProvider';
import { useAppState } from './src/hooks/useAppState';
import { useOnlineManager } from './src/hooks/useOnlineManager';

function onAppStateChange(status) {
	// React Query already supports in web browser refetch on window focus by default
	if (Platform.OS !== 'web') {
		focusManager.setFocused(status === 'active');
	}
}

export default function App() {
	// const [fontsLoaded] = useFonts({
	// 	Nunito: require('./assets/font/Nunito/Nunito.ttf'),
	// });
	useOnlineManager();

	useAppState(onAppStateChange);
	return (
		<AppGlobalProviders>
			<StackNavigators />
		</AppGlobalProviders>
	);
}
AppRegistry.registerComponent('Foodie', () => App);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: 'teal',
		fontSize: 30,
		fontWeight: '700',
	},
	tagline: {
		color: 'red',
		fontSize: 16,
		fontWeight: '500',
	},
});
