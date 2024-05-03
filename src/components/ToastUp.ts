import Toast from 'react-native-root-toast';

export default function ToastUp(message: string, options: Partial<ToastOptions> = {}): void {
  const defaultOptions: ToastOptions = {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {},
    onShown: () => {},
    onHide: () => {},
    onHidden: () => {},
  };

  const toast = Toast.show(message, { ...defaultOptions, ...options });

  setTimeout(function () {
    Toast.hide(toast);
  }, options.duration || defaultOptions.duration);
}

interface ToastOptions {
  duration: number;
  position: number;
  shadow: boolean;
  animation: boolean;
  hideOnPress: boolean;
  delay: number;
  onShow: () => void;
  onShown: () => void;
  onHide: () => void;
  onHidden: () => void;
}
