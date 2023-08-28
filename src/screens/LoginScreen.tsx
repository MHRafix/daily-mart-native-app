import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../../theme';

export default function LoginScreen({ navigation }: any) {
	// const navigation = useNavigation();

	const [email, setEmail] = useState<string>();
	const [password, setPassword] = useState<string>();

	const handleLogin = () => {
		if (email === 'rafiz.mehedi@gmail.com' && password === '590749') {
			navigation.navigate('ServiceSelector');
		} else {
			alert('Invalid credentials!');
		}
	};
	return (
		<View
			className='flex-1 bg-white'
			style={{ backgroundColor: themeColors.bg }}
		>
			<SafeAreaView className='flex '>
				<View className='flex-row justify-start'>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						className='bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4'
					>
						<ArrowLeftIcon size='20' color='black' />
					</TouchableOpacity>
				</View>
				<View className='flex-row justify-center'>
					<Image
						source={require('../../assets/images/login.png')}
						style={{ width: 200, height: 200 }}
					/>
				</View>
			</SafeAreaView>
			<View
				style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
				className='flex-1 bg-white px-8 pt-8'
			>
				<View className='form space-y-2'>
					<Text className='text-gray-700 ml-4'>Email Address</Text>
					<TextInput
						className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'
						placeholder='john@gmail.com'
						value={email}
						onChangeText={(txt: string) => setEmail(txt)}
					/>
					<Text className='text-gray-700 ml-4'>Password</Text>
					<TextInput
						className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
						secureTextEntry
						placeholder='password'
						value={password}
						onChangeText={(txt: string) => setPassword(txt)}
						onSubmitEditing={handleLogin}
					/>
					<TouchableOpacity className='flex items-end'>
						<Text className='text-gray-700 mb-5'>Forgot Password?</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={handleLogin}
						className='py-3 bg-yellow-400 rounded-xl'
					>
						<Text className='text-xl font-bold text-center text-gray-700'>
							Login
						</Text>
					</TouchableOpacity>
				</View>
				<Text className='text-xl text-gray-700 font-bold text-center py-5'>
					Or
				</Text>
				<View className='flex-row justify-center space-x-12'>
					<TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
						<Image
							source={require('../../assets/icons/google.png')}
							className='w-10 h-10'
						/>
					</TouchableOpacity>
					<TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
						<Image
							source={require('../../assets/icons/apple.png')}
							className='w-10 h-10'
						/>
					</TouchableOpacity>
					<TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
						<Image
							source={require('../../assets/icons/facebook.png')}
							className='w-10 h-10'
						/>
					</TouchableOpacity>
				</View>
				<View className='flex-row justify-center mt-7'>
					<Text className='text-gray-500 font-semibold'>
						Don't have an account?
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
						<Text className='font-semibold text-yellow-500'> Sign Up</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
