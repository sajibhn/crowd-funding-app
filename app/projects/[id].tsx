import { Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const SingleProject = () => {
	const { id } = useLocalSearchParams();
	return (
		<SafeAreaView>
			<Text>project {id}</Text>
		</SafeAreaView>
	)
}

export default SingleProject