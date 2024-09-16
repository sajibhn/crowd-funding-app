import { Text, View } from 'react-native'
import { Image } from 'expo-image';
const Index = () => {
	return (
		<View className='flex flex-1 w-full h-full'>
			<Text>hello</Text>
			<Image
				source="../assets/images/rocket.png"
				className='w-full h-full'
				contentFit="cover"
			/>
			<Text>hello</Text>
		</View>
	)
}

export default Index