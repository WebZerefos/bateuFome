import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Feather from '@expo/vector-icons/Feather'
import { themeColors } from '../theme'
import DishRow from '../components/DishRow'
import CartIcon from '../components/CartIcon'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../slices/restaurantSlice'

const RestaurantScreen = ({ route }) => {
	const { restaurant } = route.params
	const navigation = useNavigation()

	const dispatch = useDispatch()

	useEffect(() => {
		if (restaurant && restaurant.id) {
			dispatch(setRestaurant({ ...restaurant }))
		}
	}, [])

	return (
		<View>
			<StatusBar style='light' />
			<CartIcon />
			<ScrollView>
				<View className='relative'>
					<Image
						source={restaurant.image}
						className='w-full h-72'
					/>
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'
					>
						<Feather
							name='arrow-left'
							size={24}
							color={themeColors.bgColor(1)}
						/>
					</TouchableOpacity>
				</View>
				<View className='rounded-tl-[40px] rounded-tr-[40px] bg-white -mt-12 pt-6'>
					<View className='px-5'>
						<Text className='text-3xl font-bold'>{restaurant.name}</Text>
						<View className='flex-row space-x-2 my-1'>
							<View className='flex-row items-center space-x-1'>
								<Image
									source={require('../assets/images/fullStar.png')}
									className='w-4 h-4'
								/>
								<Text className='text-xs'>
									<Text className='text-green-700'>{restaurant.stars}</Text>
									<Text className='text-gray-700'>
										({restaurant.reviews} review) - <Text className='font-semibold'>{restaurant?.category}</Text>
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
						<Text className='text-gray-500 mt-2'>{restaurant.description}</Text>
					</View>
				</View>
				<View className='pb-36 bg-white'>
					<Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
					{/* dishes */}
					{restaurant.dishes.map((dish, index) => (
						<DishRow
							key={index}
							item={dish}
						/>
					))}
				</View>
			</ScrollView>
		</View>
	)
}

export default RestaurantScreen
