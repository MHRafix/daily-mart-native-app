import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ServiceSelectorScreen from '../screens/ServiceSelectorScreen';
import SignUpScreen from '../screens/SignUpScreen';
import VendorListScreen from '../screens/VendorListScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Welcome'>
				<Stack.Screen
					name='ServiceSelector'
					component={ServiceSelectorScreen}
				/>
				<Stack.Screen name='VendorList' component={VendorListScreen} />
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
}
