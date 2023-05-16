import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../contants'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import Feather from '@expo/vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../slices/restaurantSlice'
import { emptyCart } from '../slices/CartSlice'

const DeliveryScreen = () => {
	const restaurant = useSelector(selectRestaurant)
	const navigation = useNavigation()
	const dispatch = useDispatch()

	const cancelOrderHandler = () => {
		navigation.popToTop()
		dispatch(emptyCart())
	}

	return (
		<View className='flex-1'>
			<MapView
				initialRegion={{
					latitude: restaurant.lat,
					longitude: restaurant.lng,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				className='flex-1'
				mapType='standard'
			>
				<Marker
					coordinate={{ latitude: restaurant.lat, longitude: restaurant.lng }}
					title={restaurant.name}
					description={restaurant.description}
					pinColor='rgb(251 146 60)'
				/>
			</MapView>
			<View className='rounded-t-3xl -mt-12 bg-white relative'>
				<View className='flex-row justify-between px-5 pt-10 '>
					<View>
						<Text className='text-lg text-gray-700 font-semibold'>Estimated Arrival</Text>
						<Text className='text-3xl font-extrabold text-gray-700'>20-30 minutes</Text>
						<Text className='mt-2 font-semibold text-gray-700'>Your order is own its way</Text>
					</View>
					<Image
						source={require('../assets/images/bikeGuy2.gif')}
						className='w-24 h-24'
					/>
				</View>
				<View className='p-2 flex-row justify-between items-center rounded-full my-5 mx-2 bg-orange-300'>
					<View className='p-1 rounded-full'>
						<Image
							source={require('../assets/images/victor.jpg')}
							className='w-16 h-16 rounded-full'
						/>
					</View>
					<View className='flex-1 ml-3'>
						<Text className='text-lg font-bold text-white'>Victor Zerefos</Text>
						<Text className='font-semibold text-white'>Your Rider</Text>
					</View>
					<View className='flex-row items-center space-x-3 mr-3'>
						<TouchableOpacity className='bg-white p-2 rounded-full'>
							<Feather
								name='phone-call'
								color={'rgb(251 146 60)'}
								size={20}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={cancelOrderHandler}
							className='bg-white p-2 rounded-full'
						>
							<Feather
								name='x'
								color={'rgb(251 146 60)'}
								size={20}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}

export default DeliveryScreen
