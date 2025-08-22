import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabsTypes } from './bottom-tabs';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Common, Private } from '@/src/screens';

type PrivateScreens = {
	[key in keyof typeof Private]: undefined;
};

type OmittedScreen = 'VideoCall' | 'Chat';
export type PrivateNavigationProp = Omit<PrivateScreens, OmittedScreen> & {
	VideoCall?: undefined;
	Chat?: undefined;
};
type CommonScreens = {
	[key in keyof typeof Common]: undefined;
};

export type PrivateRoutesTypes = {
	TabLayout: undefined;
} & PrivateNavigationProp &
	CommonScreens;

export type StackAndTabType = CompositeNavigationProp<
	BottomTabNavigationProp<BottomTabsTypes>,
	NativeStackNavigationProp<PrivateRoutesTypes>
>;
