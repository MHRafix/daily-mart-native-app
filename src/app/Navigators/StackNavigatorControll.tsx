import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import ServiceSelectorScreen from '../../screens/ServiceSelectorScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import VendorListScreen from '../../screens/VendorListScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

interface StackNavigatorsProps {}

const StackNavigators = (props: StackNavigatorsProps) => {
	// const globalScreenOptions = {
	// 	headerStyle: {
	// 		backgroundColor: '#2C6BED',
	// 		headerTitleAlign: 'center',
	// 	},
	// 	headerTintColor: 'white',
	// };
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='ServiceSelector'>
				<Stack.Screen
					options={{ headerShown: false }}
					name='ServiceSelector'
					component={ServiceSelectorScreen}
				/>
				<Stack.Screen
					options={{ headerShown: false }}
					name='VendorList'
					component={VendorListScreen}
				/>
				<Stack.Screen
					name='Home'
					options={{ headerShown: false }}
					component={HomeScreen}
				/>
				<Stack.Screen
					name='Welcome'
					options={{ headerShown: false }}
					component={WelcomeScreen}
				/>
				<Stack.Screen
					name='Login'
					options={{ headerShown: false }}
					component={LoginScreen}
				/>
				<Stack.Screen
					name='SignUp'
					options={{ headerShown: false }}
					component={SignUpScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default StackNavigators;

const styles = StyleSheet.create({
	container: {},
});
