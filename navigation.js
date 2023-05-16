import { View, Text } from 'react-native'
import React from 'react'

import HomeScreen from './src/screens/HomeScreen'
import RestaurantScreen from './src/screens/RestaurantScreen'
import CartScreen from './src/screens/CartScreen'
import OrderPreparingScreen from './src/screens/OrderPreparingScreen'
import DeliveryScreen from './src/screens/DeliveryScreen'
// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
				/>
				<Stack.Screen
					name='Restaurant'
					component={RestaurantScreen}
				/>
				<Stack.Screen
					name='Cart'
					component={CartScreen}
					options={{ presentation: 'modal' }}
				/>
				<Stack.Screen
					name='Order'
					component={OrderPreparingScreen}
					options={{ presentation: 'fullScreenModal' }}
				/>
				<Stack.Screen
					name='Delivery'
					component={DeliveryScreen}
					options={{ presentation: 'fullScreenModal' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Navigation
