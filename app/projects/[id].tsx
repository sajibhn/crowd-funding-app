import { FlatList, Pressable, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { projectData } from '@/constants/productData';
import { Image } from 'expo-image';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import USDollar from '@/utils/convertPriceToUSD';

const SingleProject = () => {
	const { id }: {id: string} = useLocalSearchParams();
	const data = projectData.find((item) => item.id === parseInt(id))
	const {
		title,
		description,
		story,
		image,
		target,
		pledget,
		backers,
		gallery
	} = data || {}


	return (
		<ScrollView className='flex-1'>
			<SafeAreaView className='flex-1 w-full h-full p-4 pt-16'>
				<View className='flex flex-row justify-between items-center'>
					<View className='flex flex-row items-center space-x-3'>
						<Image
							source={image}
							className='w-[100px] h-[100px] rounded-full'
							contentFit="cover"
						/>
						<Text>{Math.round((pledget / target) * 100)}%</Text>
					</View>

					<Pressable>
						<Text className='bg-background text-background-alt font-bold py-4 px-8 rounded-2xl '>Donate</Text>
					</Pressable>
				</View>

				<View>
					<Text className='text-2xl mt-4'>{title}</Text>
					<View className='flex flex-row justify-around items-center mt-8'>
						<View className='flex justify-center items-center space-y-2'>
							<Feather name="target" size={24} color="#B986EF" />
							<Text className='text-green text-sm'>Target</Text>
							<Text className='text-background text-2xl'>{USDollar.format(target)}</Text>
						</View>
						<View className='flex justify-center items-center space-y-2'>
							<FontAwesome name="dollar" size={24} color="#B986EF" />
							<Text className='text-green text-sm'>Target</Text>
							<Text className='text-background text-2xl'>{USDollar.format(pledget)}</Text>
						</View>
						<View className='flex justify-center items-center space-y-2'>
							<AntDesign name="user" size={24} color="#B986EF" />
							<Text className='text-green text-sm'>Target</Text>
							<Text className='text-background text-2xl'>{backers}</Text>
						</View>
					</View>
				</View>

				<View className='mt-4'>
					<Text className='text-lg'>Title</Text>
					<Text className='text-xs'>{description}</Text>
				</View>


				<View className='mt-4'>
					<Text className='text-lg'>Gallery</Text>
					<FlatList
						data={gallery}
						keyExtractor={(item) => item}
						renderItem={({ item }) =>
							<Image
								source={item}
								className='w-[100px] h-[100px] mr-4 rounded-lg'
								contentFit='cover'
							/>
						}
						horizontal
						showsHorizontalScrollIndicator={false}
						className='mt-4'
					/>
				</View>


				<View className='mt-4'>
					<Text className='text-lg'>Story</Text>
					<Text className='text-xs'>{story}</Text>
				</View>
			</SafeAreaView>
		</ScrollView>
	)
}

export default SingleProject