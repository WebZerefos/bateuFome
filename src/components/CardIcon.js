import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CardIcon = () => {
	const navigation = useNavigation()
	return (
		<View className='absolute bottom-5 w-full z-50'>
			<TouchableOpacity
				onPress={() => navigation.navigate('Cart')}
				className='flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg bg-orange-400'
			>
				<View
					style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
					className='p-2 px-4 rounded-full'
				>
					<Text className='font-extrabold text-white text-lg'>3</Text>
				</View>
				<Text className='flex-1 text-center font-extrabold text-white text-lg'>View Cart</Text>
				<Text className='font-extrabold text-white text-lg'>${234}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default CardIcon
