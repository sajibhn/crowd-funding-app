import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Index = () => {
	const [text, onChangeText] = useState('');
	const [number, onChangeNumber] = useState('');
	return (
		<ScrollView className='bg-background'>
			<SafeAreaView className='w-full h-full flex flex-col flex-1 items-center relative'>
				<View className='w-[80px] h-[80px] bg-background-alt rounded-full flex items-center justify-center '>
					<Image
						source={require("../assets/images/rocket.png")}
						className='w-[50px] h-[50px]'
						contentFit="contain"
					/>
				</View>
				<Text className='text-3xl text-background-alt text-center mt-4'>Great Ideas,{"\n"} Powerful{"\n"} Opportunities</Text>

				<View className='w-3/5 space-y-4 mt-24'>
					<TextInput
						className='border-2 border-background-alt rounded-full w-full p-2 text-center'
						onChangeText={onChangeText}
						value={text}
						placeholder="Username / Email"
						placeholderTextColor="gray"
					/>
					<TextInput
						className='border-2 border-background-alt rounded-full w-full p-2 text-center'
						onChangeText={onChangeNumber}
						value={number}
						placeholder="Password"
						keyboardType='visible-password'
						placeholderTextColor="gray"

					/>
					<View className='flex flex-row gap-1 items-center justify-center'>
						<Text className="text-green">Don't have an account?</Text>
						<Pressable >
							<Link
								href="/projects"
								className='text-background-alt'
								>
								Signup
							</Link>
						</Pressable>
					</View>

					<Pressable className="w-4/5 mx-auto -mb-8 z-10"
						onPress={
							() => router.push("/projects")
						}
					>
						<Text className='w-full border-2 border-background bg-background-alt p-4 text-center rounded-full text-green text-lg'>Log In</Text>
					</Pressable>
				</View>

				<View className='bg-background-alt h-40 flex flex-row items-center justify-center w-full space-x-4'>
						<View className='w-[30px] h-[30px] bg-background rounded-full flex items-center justify-center'>
							<FontAwesome name="facebook-f" size={16} color="white" />
						</View>
						<View className='w-[30px] h-[30px] bg-background rounded-full flex items-center justify-center'>
							<FontAwesome5 name="twitter" size={16} color="white" />
						</View>
						<View className='w-[30px] h-[30px] bg-background rounded-full flex items-center justify-center'>
							<FontAwesome name="instagram" size={16} color="white" />
						</View>
				</View>
			</SafeAreaView>
		</ScrollView>
	)
}

export default Index