import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	redBackground: {
		backgroundColor: '#FF3E49',
		position: 'absolute',
		top: 0,
		bottom: '50%',
		width: '100%',
		zIndex: 0,
	},
	formWrapper: {
		padding: 22,
		justifyContent: 'center',
		height: '100%',
		width: '100%',
	},
	footer: {
		backgroundColor: '#D9D9D9',
		paddingHorizontal: 10,
		paddingBottom: 26,
		paddingTop: 10,
	},
	footerText: {
		fontSize: 14,
		color: '#5B6169',
		textAlign: 'center',
		fontWeight: '400',
		fontFamily: 'Montserrat-Medium',
	},
	footerLink: {
		fontWeight: '600',
		fontFamily: 'Montserrat-Bold',
		color: '#161B1F',
	},
});
