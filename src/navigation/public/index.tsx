import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth, Common, Public } from '../../screens';
import { PublicRoutesTypes } from '@/src/types/type-navigation/type-public-route';

const Stack = createNativeStackNavigator<PublicRoutesTypes>();

type PublicRouteProps = {
	initialRouteName?: keyof PublicRoutesTypes;
};

export default function PublicRoutes({ initialRouteName }: PublicRouteProps) {
	return (
		<Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Login' component={Auth.Login} />
			<Stack.Screen name='OtpVerify' component={Auth.OtpVerify} />
			<Stack.Screen name='Splash' component={Common.Splash} />
			<Stack.Screen name='Onboarding' component={Public.Onboarding} />
		</Stack.Navigator>
	);
}
