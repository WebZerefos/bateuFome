import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { featured } from '../contants'
import Feather from '@expo/vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
	const restaurant = featured.restaurants[0]
	const navigation = useNavigation()
	return (
		<View className='bg-white flex-1'>
			{/* back button */}

			<View className='relative py-4 shadow-sm'>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					className='absolute z-10 bg-orange-400 rounded-full p-1 shadow top-5 right-2'
				>
					<Feather
						name='x'
						size={24}
						color='#ffffff'
					/>
				</TouchableOpacity>
				<View>
					<Text className='text-center font-bold text-xl'>Your Cart</Text>
					<Text className='text-center text-gray-500'>{restaurant.name}</Text>
				</View>
			</View>

			{/* delivery time */}
			<View className='flex-row px-4 items-center bg-orange-100 '>
				<Image
					source={require('../assets/images/bikeGuy.png')}
					className='w-20 h-20 rounded-full'
				/>
				<Text className='flex-1 pl-4'>Deliver in 20-30 minutes</Text>
				<TouchableOpacity>
					<Text className='font-bold text-orange-400'>Change</Text>
				</TouchableOpacity>
			</View>
			{/* dishes */}
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 50 }}
				className='bg-white pt-5'
			>
				{restaurant.dishes.map((dish, index) => {
					return (
						<View
							key={index}
							className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'
						>
							<Text className='font-bold text-orange-400'>2 x</Text>
							<Image
								source={dish.image}
								className='w-14 h-14 rounded-full'
							/>
							<Text className='flex-1 font-bold text-gray-700'>{dish.name}</Text>
							<Text className='font-semibold text-base'>${dish.price}</Text>
							<TouchableOpacity className='p-1 rounded-full bg-orange-400'>
								<Feather
									name='minus'
									size={20}
									color={'#ffffff'}
								/>
							</TouchableOpacity>
						</View>
					)
				})}
			</ScrollView>

			{/* total */}
			<View className='p-6 px-8 rounded-t-3xl space-y-4 bg-orange-100'>
				<View className='flex-row justify-between'>
					<Text className='text-gray-700'>Subtotal</Text>
					<Text className='text-gray-700'>$30</Text>
				</View>
				<View className='flex-row justify-between'>
					<Text className='text-gray-700'>Delivery fee</Text>
					<Text className='text-gray-700'>$10</Text>
				</View>
				<View className='flex-row justify-between'>
					<Text className='text-gray-700 font-bold'>Order Total</Text>
					<Text className='text-gray-700 font-bold'>$30</Text>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate('Order')}
					className='p-3 rounded-full bg-orange-400'
				>
					<Text className='text-white text-center font-bold text-lg'>Place Order</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default CartScreen
