import { create } from 'zustand';
interface AppState {
	isNavigationIsReady: boolean;
	setNavigationIsReady: (state: boolean) => void;
}
const useNavigationState = create<AppState>(set => ({
	setNavigationIsReady: state => set({ isNavigationIsReady: state }),
	isNavigationIsReady: true,
}));
export default useNavigationState;
