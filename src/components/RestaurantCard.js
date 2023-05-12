import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({ restaurant }) => {
	const navigation = useNavigation()
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Restaurant', { restaurant })}>
			<View
				style={{ shadowColor: themeColors.bgColor(0.2), shadowRadius: 7 }}
				className='mr-6 bg-white rounded-3xl shadow-lg'
			>
				<Image
					source={restaurant.image}
					className='w-64 h-36 rounded-t-3xl'
				/>
				<View className='px-3 pb-4 space-y-2'>
					<Text className='text-lg font-bold pt-2'>{restaurant.name}</Text>
					<View className='flex-row items-center space-x-1'>
						<Image
							source={require('../assets/images/fullStar.png')}
							className='w-4 h-4'
						/>
						<Text className='text-xs'>
							<Text className='text-green-700'>{restaurant.stars}</Text>
							<Text className='text-gray-700'>
								({restaurant.reviews} review) -{' '}
								<Text className='font-semibold'>{restaurant?.category}</Text>
							</Text>
						</Text>
					</View>
					<View className='flex-row items-center space-x-1'>
						<Feather
							name='map-pin'
							size={15}
							color='gray'
						/>
						<Text className='text-gray-700 text-xs'>Nearby - {restaurant.address}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default RestaurantCard
