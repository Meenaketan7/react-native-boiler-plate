import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { MyStatusBar } from '@/src/components/core';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { IMAGES } from '@/src/assets';
import FormBox from '@/src/components/screens-components/login-screen/form-box';
import { styles } from './styles';

const Login = () => {
	return (
		<>
			<MyStatusBar backgroundColor='#FF3E49' barStyle='dark-content' />

			<View style={styles.container}>
				<Box style={styles.redBackground} />

				<Box style={styles.formWrapper}>
					<FormBox />
				</Box>
			</View>

			<Box style={styles.footer}>
				<Text style={styles.footerText}>
					By continuing, you agree to our{' '}
					<Text style={styles.footerLink}>Terms & Conditions</Text>
				</Text>
			</Box>
		</>
	);
};

export default Login;
