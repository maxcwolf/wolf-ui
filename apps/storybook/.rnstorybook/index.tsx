import AsyncStorage from '@react-native-async-storage/async-storage';
import { view } from './storybook.requires';

// Visual capture (targus, ADR 0009) hides the Storybook chrome, opens the websocket channel the
// capture runner drives, and never restores the last story.
const isCapture = process.env.EXPO_PUBLIC_TARGUS === 'true';

const StorybookUI = view.getStorybookUI({
  storage: { getItem: AsyncStorage.getItem, setItem: AsyncStorage.setItem },
  onDeviceUI: !isCapture,
  enableWebsockets: isCapture,
  shouldPersistSelection: !isCapture,
});

export default StorybookUI;
