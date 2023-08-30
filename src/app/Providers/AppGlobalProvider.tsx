import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useOnlineManager } from '../../hooks/useOnlineManager';
import ReactQueryProvider from './ReactQuery.Provider';

interface AppGlobalProvidersProps {
	children: JSX.Element;
}

const AppGlobalProviders = ({ children }: AppGlobalProvidersProps) => {
	// useAppState();
	useOnlineManager();
	return (
		<ReactQueryProvider>
			{/* <GluestackUIProvider config={config.theme}> */}
			<ApplicationProvider {...eva} theme={eva.light}>
				{children}
			</ApplicationProvider>
			{/* </GluestackUIProvider> */}
		</ReactQueryProvider>
	);
};
export default AppGlobalProviders;

const styles = StyleSheet.create({
	container: {},
});
