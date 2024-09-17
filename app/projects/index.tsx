import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { projectData } from '@/constants/productData';
import Project from '@/components/dashboard/projects';

const Projects = () => {
	const [text, onChangeText] = useState('');
	return (
		<SafeAreaView className='flex-1'>
			<View className="bg-background h-80 p-4 flex justify-between">
				<Text className="text-3xl text-background-alt top-32">
					Transformation {"\n"}of new ideas
				</Text>
				<View className="flex items-center">
					<TextInput
						className="w-4/5 border-2  -mb-12 border-background p-4 text-center bg-background-alt rounded-full"
						onChangeText={onChangeText}
						value={text}
						placeholder="search"
						placeholderTextColor="gray"
					/>
				</View>
			</View>

			<View className='flex-1 mt-16 w-[90%] mx-auto'>
				<Text className='text-lg mb-2'>Featured & recommended</Text>
				<View className='p-4 pb-8 bg-[#8AE2A3]'>
					<FlatList
						data={projectData}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => <Project item={item} />}
					/>
				</View>
			</View>

		</SafeAreaView>
	)
}

export default Projects