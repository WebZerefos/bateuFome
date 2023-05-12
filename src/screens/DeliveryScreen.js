import { View, Text } from 'react-native'
import React from 'react'
import { featured } from '../contants'

const DeliveryScreen = () => {
	const restaurant = featured.restaurants[0]

	return (
		<View>
			<Text>DeliveryScreen</Text>
		</View>
	)
}

export default DeliveryScreen
