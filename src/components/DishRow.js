import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'

const DishRow = ({ restaurant }) => {
	return (
		<View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
			<Image
				source={restaurant.image}
				className='w-[100px] h-[100px] rounded-3xl'
			/>
			<View className='flex flex-1 space-y-3'>
				<View className='pl-3'>
					<Text className='text-xl'>{restaurant.name}</Text>
					<Text className='text-gray-700'>{restaurant.description}</Text>
				</View>
				<View className='flex-row justify-between pl-3 items-center'>
					<Text className='text-gray-700 text-lg font-bold'>${restaurant.price}</Text>
					<View className='flex-row items-center'>
						<TouchableOpacity
							onPress={() => {}}
							className='p-1 rounded-full bg-orange-400 '
						>
							<Feather
								name='minus'
								size={15}
								color='#ffffff'
							/>
						</TouchableOpacity>
						<Text className='px-3'>{3}</Text>
						<TouchableOpacity
							onPress={() => {}}
							className='p-1 rounded-full bg-orange-400 '
						>
							<Feather
								name='plus'
								size={15}
								color='#ffffff'
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}

export default DishRow
