import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import Categories from '../components/Categories'
import { featured } from '../contants'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
	return (
		<SafeAreaView className='bg-white'>
			<View className='flex-row items-center space-x-2 px-4 pb-2'>
				<View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300'>
					<Feather
						name='search'
						size={20}
						color='gray'
					/>
					<TextInput
						placeholder='Restaurants'
						className='ml-2 flex-1'
					/>
					<View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300'>
						<Feather
							name='map-pin'
							size={20}
							color='gray'
						/>
						<Text className='text-gray-600'>Boston, MS</Text>
					</View>
				</View>
				<View className='p-3 bg-orange-400 rounded-full'>
					<Feather
						name='sliders'
						size={20}
						color='#fff'
					/>
				</View>
			</View>
			{/* main */}
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 20 }}
			>
				{/* categories */}
				<Categories />

				{/* featured */}
				<View className='mt-5'>
					{[featured, featured, featured].map((item, index) => {
						return (
							<FeaturedRow
								key={index}
								title={item.title}
								restaurants={item.restaurants}
								description={item.description}
							/>
						)
					})}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen
