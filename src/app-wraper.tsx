import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Router from './router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { NavigationContainer } from '@react-navigation/native';
import ReduxProvider from './store/redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './configs/query-cliend';
import useNavigationState from './store/zustand/navigation-state';

const AppWrapper = () => {
	const { setNavigationIsReady } = useNavigationState();
	return (
		<GestureHandlerRootView>
			<SafeAreaProvider>
				<GluestackUIProvider mode='light'>
					<NavigationContainer
						onReady={() => {
							console.log('✅ Navigation is ready');
							setNavigationIsReady(true);
						}}>
						<ReduxProvider>
							<QueryClientProvider client={queryClient}>
								<Router />
							</QueryClientProvider>
						</ReduxProvider>
					</NavigationContainer>
				</GluestackUIProvider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
};

export default AppWrapper;
