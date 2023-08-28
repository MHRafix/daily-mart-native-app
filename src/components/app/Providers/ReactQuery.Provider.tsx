import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { StyleSheet } from 'react-native';

interface ReactQueryProviderProps {
	children: JSX.Element;
}

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 2 } },
});

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default ReactQueryProvider;

const styles = StyleSheet.create({
	container: {},
});
