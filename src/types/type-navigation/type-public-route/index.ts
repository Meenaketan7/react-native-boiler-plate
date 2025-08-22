import { Auth, Public, Common } from '../../../screens';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PublicScreens = {
	[key in keyof typeof Public]: undefined;
};

type AuthScreens = {
	[key in keyof typeof Auth]: undefined;
};

type CommonScreens = {
	[key in keyof typeof Common]: undefined;
};

type OmittedScreen = 'OtpVerify';

export type PublicNavigationProp = Omit<PublicScreens, OmittedScreen> & {
	OtpVerify: undefined;
};

export type PublicRoutesTypes = PublicScreens & AuthScreens & CommonScreens;

export type PublicRouteProps = NativeStackNavigationProp<PublicRoutesTypes>;
