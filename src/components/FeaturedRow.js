import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, description, restaurants }) => {
	return (
		<View>
			<View className='flex-row justify-between items-center px-4'>
				<View>
					<Text className='font-bold text-lg'>{title}</Text>
					<Text className='text-gray-500 text-sm'>{description}</Text>
				</View>
				<TouchableOpacity>
					<Text className='text-orange-400 font-semibold'>See All</Text>
				</TouchableOpacity>
			</View>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 15 }}
				className='overflow-visible'
			>
				{restaurants.map((restaurant, index) => {
					return (
						<RestaurantCard
							key={index}
							restaurant={restaurant}
						/>
					)
				})}
			</ScrollView>
		</View>
	)
}

export default FeaturedRow
