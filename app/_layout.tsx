import { Stack } from 'expo-router';

const RootLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen
				name='projects/index'
				options={{
					headerTransparent: true,
					headerTitle: '', 
				}}
				
			/>
			<Stack.Screen
				name="projects/[id]"
				options={{
					headerTransparent: true,
					headerTitle: '',
				}}
			/>
		</Stack>
	)
}

export default RootLayout;