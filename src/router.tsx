import React, { useState } from 'react';
import PrivateRoutes from './navigation/private';
import PublicRoutes from './navigation/public';

import { Splash } from './screens/common';
import useNavigationState from './store/zustand/navigation-state';

const Router: React.FC = () => {
	const user = '';
	const { isNavigationIsReady } = useNavigationState();
	const [appReady, setAppReady] = useState(false);

	if (!appReady || !isNavigationIsReady) {
		return <Splash onFinish={() => setAppReady(true)} />;
	}
	return user ? (
		<PrivateRoutes initialRouteName={'TabLayout'} />
	) : (
		<PublicRoutes initialRouteName={'Login'} />
	);
};

export default Router;
