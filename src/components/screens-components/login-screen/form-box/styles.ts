import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	formBox: {
		backgroundColor: 'white',
		paddingTop: 48,
		paddingHorizontal: 16,
		paddingBottom: 36,
		borderRadius: 10,
		width: '100%',
		zIndex: 5,
		elevation: 9,
		shadowColor: 'grey',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		position: 'relative',
	},
	logoWrapper: {
		position: 'absolute',
		alignSelf: 'center',
		top: -25,
		backgroundColor: 'white',
		padding: 6,
		borderRadius: 9999,
		zIndex: 10,
	},
	logo: {
		width: 52,
		height: 52,
	},
	headingText: {
		fontSize: 30, // ~text-4xl
		color: '#161B1F',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	subText: {
		fontSize: 16, // ~text-xl
		color: '#6B7280',
		textAlign: 'center',
		marginBottom: 20,
		fontFamily: 'Montserrat-Regular',
	},
});
