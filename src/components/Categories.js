import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { categories } from '../contants'

const Categories = () => {
	return (
		<View className='mt-4'>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='overflow-visible'
				contentContainerStyle={{ paddingHorizontal: 15 }}
			>
				{categories.map((category, index) => (
					<View key={index}>
						<Text>{category.name}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	)
}

export default Categories
