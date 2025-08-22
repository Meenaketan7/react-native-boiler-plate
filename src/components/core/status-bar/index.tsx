import React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, View, StatusBar } from 'react-native';
type MyStatusBarProps = {
	backgroundColor: string;
} & React.ComponentProps<typeof StatusBar>;
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const MyStatusBar: React.FC<MyStatusBarProps> = ({ backgroundColor, ...props }) => {
	return (
		<View style={[styles.statusBar, { backgroundColor }]}>
			<SafeAreaView>
				<StatusBar
					animated={true}
					translucent
					backgroundColor={backgroundColor}
					{...props}
				/>
			</SafeAreaView>
		</View>
	);
};

export default React.memo(MyStatusBar);

const styles = StyleSheet.create({
	statusBar: {
		height: STATUSBAR_HEIGHT,
	},
});
