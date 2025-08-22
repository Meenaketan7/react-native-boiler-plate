import { IMAGES } from '@/src/assets';
import { MyStatusBar } from '@/src/components/core';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
type SplashProps = {
	onFinish?: () => void;
};
const Splash = ({ onFinish }: SplashProps) => {
	const fadeAnim = useRef(new Animated.Value(1)).current;

	useEffect(() => {
		const timeout = setTimeout(() => {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 500,
				useNativeDriver: true,
			}).start(() => {
				onFinish?.();
			});
		}, 2000);

		return () => clearTimeout(timeout);
	}, []);
	return (
		<Animated.View style={[StyleSheet.absoluteFill, { opacity: fadeAnim }]}>
			<MyStatusBar backgroundColor='#FF3E49' barStyle='dark-content' />
			<View style={{ flex: 1, backgroundColor: 'red' }}>
				<Image
					source={IMAGES?.SplashScreen?.IsplashScreen?.SPLASH_SCREEN}
					alt='Splash'
					style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
				/>
			</View>
		</Animated.View>
	);
};

export default Splash;
