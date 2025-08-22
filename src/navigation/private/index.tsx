import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabLayout from '../tab-layout';
import { PrivateRoutesTypes } from '@/src/types/type-navigation/type-private-route/private-screens';
import { Common } from '@/src/screens';

const Stack = createNativeStackNavigator<PrivateRoutesTypes>();
type PrivateRouteProps = {
	initialRouteName?: keyof PrivateRoutesTypes;
};

export default function PrivateRoutes({ initialRouteName }: PrivateRouteProps) {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName}>
			<Stack.Screen name='TabLayout' component={TabLayout} />
			<Stack.Screen name='Splash' component={Common.Splash} />
		</Stack.Navigator>
	);
}
