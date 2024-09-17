import { Image } from 'expo-image'
import { router } from 'expo-router';
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const Project = ({ item }) => {
	const {
		id,
		target,
		pledget,
		backers,
		image
	} = item;

	let USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	return (
		<Pressable
			onPress={() => router.push(`projects/${id}`)}
		>
			<View className='flex flex-row space-x-2 bg-background-alt mb-4 p-2 rounded-lg'>
				<View>
					<Image
						source={image}
						className='w-[180px] h-[120px]'
						contentFit="cover"
					/>
				</View>
				<View>
					<Text className='text-lg mb-2'>Project name</Text>
					<View className=''>
						<View className='flex flex-row space-x-8'>
							<Text className='text-green'>Target</Text>
							<Text>{USDollar.format(target)}</Text>
						</View>
						<View className='flex flex-row space-x-8'>
							<Text className='text-green'>Pledget</Text>
							<Text>{USDollar.format(pledget)}</Text>
						</View>
						<View className='flex flex-row space-x-8'>
							<Text className='text-green'>Backers</Text>
							<Text>{backers}</Text>
						</View>
					</View>
				</View>
			</View>
		</Pressable>
	)
}

export default Project